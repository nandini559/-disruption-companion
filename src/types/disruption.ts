import type { ActionType, DisruptionExplanation, DisruptionScenario, Language } from "../data/disruptions";

/**
 * Result of disruption analysis from either local AI or local keyword matcher.
 */
export interface DisruptionAnalysis {
  scenarioId: string;
  confidence?: number;
  detectedCause?: string;
  source: "local-ai" | "local-matcher";
}

/**
 * Abstraction interface for a local AI provider (e.g., local web LLM or Chrome AI).
 */
export interface LocalAIProvider {
  /**
   * Checks whether the local AI model is available on device.
   */
  isAvailable(): Promise<boolean>;

  /**
   * Analyzes staff input string using local AI and returns classification.
   */
  analyzeDisruption(input: string): Promise<DisruptionAnalysis | null>;
}

/**
 * Full resolved disruption package combining classification analysis with trusted knowledge base text.
 */
export interface ResolvedDisruption {
  analysis: DisruptionAnalysis;
  scenario: DisruptionScenario;
  explanation: DisruptionExplanation;
  recommendedAction: ActionType;
  language: Language;
}
