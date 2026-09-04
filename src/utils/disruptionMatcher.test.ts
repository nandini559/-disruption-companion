import { matchDisruption } from "./disruptionMatcher";

interface TestCase {
  input: string;
  expectedScenarioId: string | null;
}

const testCases: TestCase[] = [
  {
    input: "Toy train cancelled because of heavy rain",
    expectedScenarioId: "train-cancelled",
  },
  {
    input: "Train delayed by 45 minutes near Batasia Loop due to fog",
    expectedScenarioId: "train-delayed",
  },
  {
    input: "Landslide near Kurseong track is impassable",
    expectedScenarioId: "landslide",
  },
  {
    input: "Route blocked between Tindharia and Kurseong",
    expectedScenarioId: "route-blocked",
  },
  {
    input: "Heavy monsoon rain in the Darjeeling hills",
    expectedScenarioId: "heavy-rain",
  },
  {
    input: "Track obstruction due to fallen tree branch",
    expectedScenarioId: "track-obstruction",
  },
  {
    input: "Train terminated early at Kurseong station",
    expectedScenarioId: "train-terminated-early",
  },
  {
    input: "Station temporarily closed for power restoration",
    expectedScenarioId: "station-temporarily-closed",
  },
  {
    input: "Alternative road transport Tata Sumo shuttles ready at gate 2",
    expectedScenarioId: "road-transport-available",
  },
  {
    input: "Ticket refund required at station counter 1",
    expectedScenarioId: "refund-required",
  },
  {
    input: "Please wait for station announcement",
    expectedScenarioId: "wait-for-announcement",
  },
  {
    input: "All clear weather completely sunny",
    expectedScenarioId: null,
  },
];

console.log("=== RUNNING OFFLINE DISRUPTION MATCHER TESTS ===\n");

let passed = 0;
let failed = 0;

for (const testCase of testCases) {
  const match = matchDisruption(testCase.input);
  const matchedId = match ? match.scenario.id : null;
  const isPass = matchedId === testCase.expectedScenarioId;

  if (isPass) {
    passed++;
    console.log(`[PASS] Input: "${testCase.input}"`);
    console.log(`       Result: ${matchedId} (Score: ${match?.score})\n`);
  } else {
    failed++;
    console.error(`[FAIL] Input: "${testCase.input}"`);
    console.error(`       Expected: ${testCase.expectedScenarioId}`);
    console.error(`       Got: ${matchedId} (Score: ${match?.score})\n`);
  }
}

console.log(`=== TEST SUMMARY: ${passed}/${testCases.length} PASSED (${failed} FAILED) ===`);

if (failed > 0) {
  console.error(`Failed ${failed} test(s).`);
}
