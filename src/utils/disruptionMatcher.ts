import { DISRUPTION_SCENARIOS, type DisruptionScenario } from "../data/disruptions";

export interface MatchResult {
  scenario: DisruptionScenario;
  score: number;
  matchedKeywords: string[];
}

/**
 * Normalizes text by converting to lowercase, stripping non-alphanumeric characters,
 * and collapsing whitespace.
 */
export function normalizeText(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Local offline matching function that finds the most relevant DisruptionScenario
 * based on free-text status input entered by station staff.
 * 
 * @param input Free-text status string entered by station staff
 * @returns The best matching scenario with score metadata, or null if no match found
 */
export function matchDisruption(input: string): MatchResult | null {
  if (!input || !input.trim()) {
    return null;
  }

  const normalizedInput = normalizeText(input);
  if (!normalizedInput) {
    return null;
  }

  let bestMatch: MatchResult | null = null;
  let highestScore = 0;

  for (const scenario of DISRUPTION_SCENARIOS) {
    let score = 0;
    const matchedKeywords: string[] = [];

    for (const rawKeyword of scenario.keywords) {
      const keyword = normalizeText(rawKeyword);
      if (!keyword) continue;

      const isMultiWord = keyword.includes(" ");

      if (isMultiWord) {
        // Multi-word phrase match (higher weight based on word count)
        if (normalizedInput.includes(keyword)) {
          const wordCount = keyword.split(" ").length;
          score += 15 * wordCount;
          matchedKeywords.push(rawKeyword);
        }
      } else {
        // Single word exact token match
        const regex = new RegExp(`\\b${keyword}\\b`, "i");
        if (regex.test(normalizedInput)) {
          score += 8;
          matchedKeywords.push(rawKeyword);
        }
      }

      // Extra weight for primary operational status words (e.g. cancelled, landslide, blocked)
      const primaryImpactWords = ["cancel", "cancelled", "cancellation", "landslide", "mudslide", "rockslide", "terminated", "closed", "blocked"];
      if (primaryImpactWords.some((w) => keyword.includes(w)) && normalizedInput.includes(keyword)) {
        score += 15;
      }
    }

    if (score > 0) {
      // Category & Severity priority bonuses:
      // Critical operational outcomes (cancellations, route blocks, refunds) take precedence over secondary environmental causes
      if (scenario.category === "cancellation") {
        score += 12;
      } else if (scenario.category === "refund") {
        score += 10;
      } else if (scenario.category === "disruption") {
        score += 8;
      } else if (scenario.category === "station") {
        score += 6;
      }

      if (scenario.severity === "high") {
        score += 5;
      } else if (scenario.severity === "medium") {
        score += 2;
      }

      if (score > highestScore) {
        highestScore = score;
        bestMatch = {
          scenario,
          score,
          matchedKeywords,
        };
      }
    }
  }

  return bestMatch;
}
