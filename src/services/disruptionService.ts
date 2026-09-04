import { DISRUPTION_SCENARIOS, type Language } from "../data/disruptions";
import type { DisruptionAnalysis, LocalAIProvider, ResolvedDisruption } from "../types/disruption";
import { matchDisruption } from "../utils/disruptionMatcher";

let registeredAIProvider: LocalAIProvider | null = null;

/**
 * Registers or unregisters an optional Local AI Provider (e.g. Chrome AI or local WebLLM).
 * Pass null to disable AI provider and use local matcher exclusively.
 */
export function setLocalAIProvider(provider: LocalAIProvider | null): void {
  registeredAIProvider = provider;
}

/**
 * Gets the current active Local AI Provider.
 */
export function getLocalAIProvider(): LocalAIProvider | null {
  return registeredAIProvider;
}

/**
 * Primary disruption analysis and explanation retrieval service.
 * Follows the Offline Architecture:
 *   Staff Input -> Try Local AI -> Fall back to Local Matcher -> Lookup Knowledge Base -> Return Resolved Disruption
 * 
 * @param input Free-text status string entered by station staff
 * @param language Target language for passenger guidance ("en" | "hi" | "bn" | "ne")
 * @returns ResolvedDisruption object or null if input cannot be matched
 */
export async function processDisruptionInput(
  input: string,
  language: Language = "en"
): Promise<ResolvedDisruption | null> {
  if (!input || !input.trim()) {
    return null;
  }

  let analysis: DisruptionAnalysis | null = null;

  // 1. Try Local AI classification if provider is available
  if (registeredAIProvider) {
    try {
      const isAvailable = await registeredAIProvider.isAvailable();
      if (isAvailable) {
        const aiAnalysis = await registeredAIProvider.analyzeDisruption(input);
        if (aiAnalysis && aiAnalysis.scenarioId) {
          // Verify that scenarioId exists in our trusted local knowledge base
          const exists = DISRUPTION_SCENARIOS.some((s) => s.id === aiAnalysis.scenarioId);
          if (exists) {
            analysis = {
              scenarioId: aiAnalysis.scenarioId,
              confidence: aiAnalysis.confidence ?? 0.95,
              detectedCause: aiAnalysis.detectedCause,
              source: "local-ai",
            };
          }
        }
      }
    } catch {
      // Fallback silently if Local AI throws or fails
      analysis = null;
    }
  }

  // 2. Fall back to Local Keyword Matcher if AI is unavailable or returned null
  if (!analysis) {
    const matchResult = matchDisruption(input);
    if (matchResult) {
      analysis = {
        scenarioId: matchResult.scenario.id,
        confidence: Math.min(1.0, Number((matchResult.score / 50).toFixed(2))),
        source: "local-matcher",
      };
    }
  }

  // 3. If neither AI nor matcher could identify a scenario, return null
  if (!analysis) {
    return null;
  }

  // 4. Retrieve trusted scenario details from local knowledge base (Source of Truth)
  const scenario = DISRUPTION_SCENARIOS.find((s) => s.id === analysis.scenarioId);
  if (!scenario) {
    return null;
  }

  const explanation = scenario.explanations[language] || scenario.explanations.en;

  return {
    analysis,
    scenario,
    explanation,
    recommendedAction: scenario.recommendedAction,
    language,
  };
}
