import { processDisruptionInput, setLocalAIProvider } from "./disruptionService";
import type { LocalAIProvider } from "../types/disruption";
import type { Language } from "../data/disruptions";

interface TestCase {
  input: string;
  expectedScenarioId: string | null;
  lang?: Language;
}

const testCases: TestCase[] = [
  {
    input: "Toy train cancelled because of heavy rain",
    expectedScenarioId: "train-cancelled",
  },
  {
    input: "Train is running 2 hours late",
    expectedScenarioId: "train-delayed",
  },
  {
    input: "Landslide has blocked the railway track",
    expectedScenarioId: "landslide",
  },
  {
    input: "Station is temporarily closed",
    expectedScenarioId: "station-temporarily-closed",
  },
  {
    input: "Train terminated before destination",
    expectedScenarioId: "train-terminated-early",
  },
  {
    input: "Please wait for further announcement",
    expectedScenarioId: "wait-for-announcement",
  },
  {
    input: "Sunny day clear sky completely fine",
    expectedScenarioId: null,
  },
];

async function runTests() {
  console.log("=== RUNNING OFFLINE DISRUPTION SERVICE TESTS ===\n");
  let passed = 0;
  let failed = 0;

  // Test 1: Test with default Local Matcher (no AI provider set)
  console.log("--- TEST GROUP 1: LOCAL MATCHER FALLBACK ---");
  setLocalAIProvider(null);

  for (const testCase of testCases) {
    const result = await processDisruptionInput(testCase.input, testCase.lang || "en");
    const matchedId = result ? result.scenario.id : null;

    if (matchedId === testCase.expectedScenarioId) {
      passed++;
      console.log(`[PASS] Input: "${testCase.input}"`);
      console.log(`       Source: ${result?.analysis.source}`);
      console.log(`       Scenario: ${matchedId}`);
      if (result) {
        console.log(`       Explanation: "${result.explanation.title} - ${result.explanation.explanation}"`);
        console.log(`       Recommended Action: ${result.recommendedAction}`);
      }
      console.log("");
    } else {
      failed++;
      console.error(`[FAIL] Input: "${testCase.input}"`);
      console.error(`       Expected: ${testCase.expectedScenarioId}`);
      console.error(`       Got: ${matchedId}\n`);
    }
  }

  // Test 2: Test Multilingual Output Retrieval
  console.log("--- TEST GROUP 2: MULTILINGUAL KNOWLEDGE BASE RETRIEVAL ---");
  const languages: Language[] = ["en", "hi", "bn", "ne"];
  for (const lang of languages) {
    const result = await processDisruptionInput("Toy train cancelled because of heavy rain", lang);
    if (result && result.explanation && result.explanation.title) {
      passed++;
      console.log(`[PASS] Language [${lang}]: Title="${result.explanation.title}"`);
    } else {
      failed++;
      console.error(`[FAIL] Language [${lang}] output missing`);
    }
  }
  console.log("");

  // Test 3: Test Local AI Provider Mock & Resilience Fallback
  console.log("--- TEST GROUP 3: LOCAL AI PROVIDER & FALLBACK RESILIENCE ---");

  // Simulating an available local AI provider
  const mockAIProvider: LocalAIProvider = {
    async isAvailable() {
      return true;
    },
    async analyzeDisruption(input: string) {
      if (input.includes("cancelled")) {
        return { scenarioId: "train-cancelled", confidence: 0.98, source: "local-ai" };
      }
      return null; // Fallback to matcher for others
    },
  };

  setLocalAIProvider(mockAIProvider);
  const aiResult = await processDisruptionInput("Toy train cancelled because of heavy rain", "en");
  if (aiResult && aiResult.analysis.source === "local-ai" && aiResult.scenario.id === "train-cancelled") {
    passed++;
    console.log(`[PASS] Local AI classification succeeded: source=${aiResult.analysis.source}, id=${aiResult.scenario.id}`);
  } else {
    failed++;
    console.error(`[FAIL] Local AI classification failed`);
  }

  // Simulating a crashing local AI provider (resilience check)
  const crashingAIProvider: LocalAIProvider = {
    async isAvailable() {
      return true;
    },
    async analyzeDisruption() {
      throw new Error("Local AI Out of Memory");
    },
  };

  setLocalAIProvider(crashingAIProvider);
  const fallbackResult = await processDisruptionInput("Landslide on track", "en");
  if (fallbackResult && fallbackResult.analysis.source === "local-matcher" && fallbackResult.scenario.id === "landslide") {
    passed++;
    console.log(`[PASS] Crashing AI fallback succeeded: source=${fallbackResult.analysis.source}, id=${fallbackResult.scenario.id}`);
  } else {
    failed++;
    console.error(`[FAIL] Crashing AI fallback failed`);
  }

  console.log(`\n=== ALL SERVICE TESTS COMPLETED: ${passed} PASSED, ${failed} FAILED ===`);
  if (failed > 0) {
    console.error(`Failed ${failed} test(s).`);
  }
}

runTests();
