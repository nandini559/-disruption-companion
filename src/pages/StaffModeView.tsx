import { useState } from "react";
import { processDisruptionInput } from "../services/disruptionService";
import type { ResolvedDisruption } from "../types/disruption";

interface StaffModeViewProps {
  onDisruptionResolved: (result: ResolvedDisruption) => void;
  onNavigateToPassenger: () => void;
  activeDisruption?: ResolvedDisruption | null;
}

export function StaffModeView({
  onDisruptionResolved,
  onNavigateToPassenger,
  activeDisruption,
}: StaffModeViewProps) {
  const [currentStep, setCurrentStep] = useState<1 | 2 | 3>(1);
  const [selectedArchetype, setSelectedArchetype] = useState<string>("delayed");
  const [selectedDuration, setSelectedDuration] = useState<string>("45 min");
  const [selectedTrain, setSelectedTrain] = useState<string>("52541");
  const [incidentReason, setIncidentReason] = useState<string>(
    "Toy Train #52541 to Darjeeling is delayed by 45 minutes due to heavy monsoon rain and track clearance near Batasia Loop."
  );
  const [toggleTransport, setToggleTransport] = useState<boolean>(true);
  const [toggleRefund, setToggleRefund] = useState<boolean>(true);
  const [resolvedResult, setResolvedResult] = useState<ResolvedDisruption | null>(
    activeDisruption || null
  );
  const [showSuccessNotice, setShowSuccessNotice] = useState<boolean>(false);

  // Sync archetype selection with input text presets
  const handleSelectArchetype = (type: string) => {
    setSelectedArchetype(type);
    let presetText = "";
    if (type === "delayed") {
      presetText = "Toy Train #52541 to Darjeeling is delayed by 45 minutes due to heavy monsoon rain and track clearance near Batasia Loop.";
    } else if (type === "cancelled") {
      presetText = "Toy train cancelled because of heavy rain and track safety concerns.";
    } else if (type === "disrupted") {
      presetText = "Route blocked between Tindharia and Kurseong due to landslide on track.";
    } else if (type === "alternative") {
      presetText = "Alternative road transport Tata Sumo shuttles activated at station forecourt gate 2.";
    } else if (type === "other") {
      presetText = "Track obstruction due to fallen tree branch near Batasia Loop.";
    }
    setIncidentReason(presetText);
    runProcessInput(presetText);
  };

  const runProcessInput = async (text: string) => {
    const result = await processDisruptionInput(text, "en");
    if (result) {
      setResolvedResult(result);
      onDisruptionResolved(result);
      setShowSuccessNotice(true);
    }
  };

  const handleStepSubmit = async (nextStep: 1 | 2 | 3) => {
    await runProcessInput(incidentReason);
    setCurrentStep(nextStep);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Station Banner & Offline Mesh Status Indicator */}
      <div className="w-full bg-surface-container-high rounded-xl p-space-md mb-space-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-sm min-w-0">
          <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center text-on-primary-container shrink-0 shadow-sm">
            <span className="material-symbols-outlined text-[26px]">
              cell_tower
            </span>
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-space-xs flex-wrap">
              <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold">
                Station Disruption Protocol Studio
              </span>
              <span className="px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                Staff Console
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
              Ghum Station (2,258 m) • Operator:{" "}
              <span className="font-label-sm text-on-surface font-semibold">
                DHR-STN-402 (Senior Station Master Desk)
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-space-sm self-start md:self-auto shrink-0">
          <div className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container-lowest shadow-sm">
            <span className="h-2.5 w-2.5 rounded-full bg-secondary animate-pulse"></span>
            <span className="font-label-sm text-label-sm text-on-surface font-bold">
              Offline Matcher: Active
            </span>
          </div>
          <div className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-lg bg-surface-container-lowest text-on-surface-variant shadow-sm">
            <span className="material-symbols-outlined text-[16px] text-secondary">
              wifi_tethering
            </span>
            <span className="font-label-sm text-label-sm font-semibold">
              Ghum Mesh Node #3
            </span>
          </div>
        </div>
      </div>

      {/* Success Processed Notification Toast */}
      {showSuccessNotice && resolvedResult && (
        <div className="w-full mb-space-lg p-space-md rounded-xl bg-primary-container text-on-primary-container shadow-md flex flex-col md:flex-row md:items-center justify-between gap-space-md animate-fade-in">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-[24px]">
              check_circle
            </span>
            <div>
              <span className="font-headline-sm text-headline-sm font-bold block">
                Disruption Processed: {resolvedResult.scenario.explanations.en.title}
              </span>
              <span className="font-body-sm text-body-sm opacity-90">
                Matched Scenario ID: <strong>{resolvedResult.analysis.scenarioId}</strong> ({resolvedResult.analysis.source}) • Recommended Action: <strong>{resolvedResult.recommendedAction}</strong>
              </span>
            </div>
          </div>
          <button
            onClick={onNavigateToPassenger}
            className="w-full md:w-auto h-10 px-space-md bg-surface-container-lowest text-primary rounded-lg font-label-md text-label-md font-bold flex items-center justify-center gap-1 hover:bg-surface-container-high transition-colors shrink-0"
            type="button"
          >
            <span>Go to Passenger Kiosk</span>
            <span className="material-symbols-outlined text-[18px]">
              arrow_forward
            </span>
          </button>
        </div>
      )}

      {/* Interactive 3-Step Breadcrumb Progress Bar */}
      <div className="w-full bg-surface-container-lowest rounded-xl p-space-md mb-space-xl shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
          {/* Step 1 Indicator */}
          <button
            onClick={() => setCurrentStep(1)}
            type="button"
            className={`flex items-center gap-space-sm p-space-sm rounded-lg transition-all text-left group ${
              currentStep === 1
                ? "bg-primary-container text-on-primary-container shadow-sm"
                : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-label-md text-label-md font-bold shrink-0 ${
                currentStep === 1
                  ? "bg-on-primary-container text-primary-container"
                  : "bg-surface-container-highest text-on-surface"
              }`}
            >
              1
            </div>
            <div className="flex flex-col min-w-0">
              <span
                className={`font-label-sm text-label-sm uppercase tracking-wider ${
                  currentStep === 1
                    ? "text-on-primary-container/80"
                    : "text-on-surface-variant"
                }`}
              >
                Step 01
              </span>
              <span
                className={`font-headline-sm text-headline-sm truncate font-semibold ${
                  currentStep === 1 ? "text-on-primary-container" : "text-on-surface"
                }`}
              >
                Select Disruption
              </span>
            </div>
          </button>

          {/* Step 2 Indicator */}
          <button
            onClick={() => setCurrentStep(2)}
            type="button"
            className={`flex items-center gap-space-sm p-space-sm rounded-lg transition-all text-left group ${
              currentStep === 2
                ? "bg-primary-container text-on-primary-container shadow-sm"
                : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-label-md text-label-md font-bold shrink-0 ${
                currentStep === 2
                  ? "bg-on-primary-container text-primary-container"
                  : "bg-surface-container-highest text-on-surface"
              }`}
            >
              2
            </div>
            <div className="flex flex-col min-w-0">
              <span
                className={`font-label-sm text-label-sm uppercase tracking-wider ${
                  currentStep === 2
                    ? "text-on-primary-container/80"
                    : "text-on-surface-variant"
                }`}
              >
                Step 02
              </span>
              <span
                className={`font-headline-sm text-headline-sm truncate font-semibold ${
                  currentStep === 2 ? "text-on-primary-container" : "text-on-surface"
                }`}
              >
                Incident Details
              </span>
            </div>
          </button>

          {/* Step 3 Indicator */}
          <button
            onClick={() => setCurrentStep(3)}
            type="button"
            className={`flex items-center gap-space-sm p-space-sm rounded-lg transition-all text-left group ${
              currentStep === 3
                ? "bg-primary-container text-on-primary-container shadow-sm"
                : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-label-md text-label-md font-bold shrink-0 ${
                currentStep === 3
                  ? "bg-on-primary-container text-primary-container"
                  : "bg-surface-container-highest text-on-surface"
              }`}
            >
              3
            </div>
            <div className="flex flex-col min-w-0">
              <span
                className={`font-label-sm text-label-sm uppercase tracking-wider ${
                  currentStep === 3
                    ? "text-on-primary-container/80"
                    : "text-on-surface-variant"
                }`}
              >
                Step 03
              </span>
              <span
                className={`font-headline-sm text-headline-sm truncate font-semibold ${
                  currentStep === 3 ? "text-on-primary-container" : "text-on-surface"
                }`}
              >
                Multilingual Broadcast
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* WORKFLOW CONTAINER */}
      <div className="w-full">
        {/* STEP 1: SELECT DISRUPTION */}
        {currentStep === 1 && (
          <div className="flex flex-col w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-xs">
              <div>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
                  Incident Triage Protocol
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold mt-0.5">
                  What is the incident type?
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Select an archetype to auto-configure appropriate mountain
                  passenger advisories and relief paths.
                </p>
              </div>
              <span className="font-label-sm text-label-sm text-on-surface-variant px-space-sm py-1 bg-surface-container-high rounded-full self-start md:self-auto font-semibold">
                Ghum Sub-Division Control • Katihar NFR
              </span>
            </div>

            {/* Archetype Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md mb-space-xl">
              {/* Archetype 1: Train Delayed */}
              <div
                onClick={() => handleSelectArchetype("delayed")}
                className={`archetype-card cursor-pointer p-space-lg rounded-xl bg-surface-container-lowest shadow-md transition-all relative overflow-hidden bg-gradient-to-br from-surface-container-lowest to-surface-container-low ${
                  selectedArchetype === "delayed"
                    ? "ring-2 ring-primary"
                    : "hover:shadow-md"
                }`}
              >
                <div className="absolute top-0 left-0 w-2 h-full bg-primary"></div>
                <div className="flex items-start justify-between mb-space-md">
                  <div className="w-12 h-12 rounded-xl bg-primary-container text-on-primary-container flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[28px]">
                      schedule
                    </span>
                  </div>
                  {selectedArchetype === "delayed" && (
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-on-primary">
                      <span className="material-symbols-outlined text-[16px]">
                        check
                      </span>
                    </span>
                  )}
                </div>
                <h3 className="font-headline-sm text-headline-sm text-primary font-bold mb-1">
                  Train Delayed
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                  Service is running behind schedule due to mountain speed
                  limits, heavy monsoon fog, or siding congestion.
                </p>
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-primary font-bold">
                  <span className="material-symbols-outlined text-[16px]">
                    hourglass_top
                  </span>
                  <span>Est. Wait Broadcast • Amenities Open</span>
                </div>
              </div>

              {/* Archetype 2: Train Cancelled */}
              <div
                onClick={() => handleSelectArchetype("cancelled")}
                className={`archetype-card cursor-pointer p-space-lg rounded-xl bg-surface-container-lowest shadow-sm transition-all relative overflow-hidden ${
                  selectedArchetype === "cancelled"
                    ? "ring-2 ring-error"
                    : "hover:shadow-md"
                }`}
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-error"></div>
                <div className="flex items-start justify-between mb-space-md">
                  <div className="w-12 h-12 rounded-xl bg-error-container text-on-error-container flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[28px]">
                      cancel
                    </span>
                  </div>
                  {selectedArchetype === "cancelled" && (
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-on-primary">
                      <span className="material-symbols-outlined text-[16px]">
                        check
                      </span>
                    </span>
                  )}
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">
                  Train Cancelled
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                  Full service suspension due to rockslide, track subsidence,
                  locomotive breakdown, or severe weather warning.
                </p>
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-error font-semibold">
                  <span className="material-symbols-outlined text-[16px]">
                    currency_rupee
                  </span>
                  <span>Immediate Full Refund Trigger</span>
                </div>
              </div>

              {/* Archetype 3: Route Disrupted */}
              <div
                onClick={() => handleSelectArchetype("disrupted")}
                className={`archetype-card cursor-pointer p-space-lg rounded-xl bg-surface-container-lowest shadow-sm transition-all relative overflow-hidden ${
                  selectedArchetype === "disrupted"
                    ? "ring-2 ring-tertiary-container"
                    : "hover:shadow-md"
                }`}
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-tertiary-container"></div>
                <div className="flex items-start justify-between mb-space-md">
                  <div className="w-12 h-12 rounded-xl bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[28px]">
                      landslide
                    </span>
                  </div>
                  {selectedArchetype === "disrupted" && (
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-on-primary">
                      <span className="material-symbols-outlined text-[16px]">
                        check
                      </span>
                    </span>
                  )}
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">
                  Route Disrupted
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                  Section impassable between Tindharia and Kurseong; partial loop
                  operational or terminable at Kurseong.
                </p>
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-tertiary-container font-semibold">
                  <span className="material-symbols-outlined text-[16px]">
                    alt_route
                  </span>
                  <span>Short Termination / Loop Cut</span>
                </div>
              </div>

              {/* Archetype 4: Alternative Transport Activated */}
              <div
                onClick={() => handleSelectArchetype("alternative")}
                className={`archetype-card cursor-pointer p-space-lg rounded-xl bg-surface-container-lowest shadow-sm transition-all relative overflow-hidden ${
                  selectedArchetype === "alternative"
                    ? "ring-2 ring-secondary"
                    : "hover:shadow-md"
                }`}
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-secondary"></div>
                <div className="flex items-start justify-between mb-space-md">
                  <div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[28px]">
                      airport_shuttle
                    </span>
                  </div>
                  {selectedArchetype === "alternative" && (
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-on-primary">
                      <span className="material-symbols-outlined text-[16px]">
                        check
                      </span>
                    </span>
                  )}
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">
                  Alternative Road Transport
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                  Emergency Tata Sumo / Hill shuttle fleet activated from station
                  forecourt for rapid hill passenger evacuation.
                </p>
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-secondary font-semibold">
                  <span className="material-symbols-outlined text-[16px]">
                    directions_bus
                  </span>
                  <span>Forecourt Gate Shuttles Ready</span>
                </div>
              </div>

              {/* Archetype 5: Other Hill Hazard */}
              <div
                onClick={() => handleSelectArchetype("other")}
                className={`archetype-card cursor-pointer p-space-lg rounded-xl bg-surface-container-lowest shadow-sm transition-all relative overflow-hidden md:col-span-2 lg:col-span-2 ${
                  selectedArchetype === "other"
                    ? "ring-2 ring-outline"
                    : "hover:shadow-md"
                }`}
              >
                <div className="absolute top-0 left-0 w-1.5 h-full bg-outline"></div>
                <div className="flex items-start justify-between mb-space-md">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-highest text-on-surface flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[28px]">
                      warning
                    </span>
                  </div>
                  {selectedArchetype === "other" && (
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-on-primary">
                      <span className="material-symbols-outlined text-[16px]">
                        check
                      </span>
                    </span>
                  )}
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold mb-1">
                  Other Hill Hazard / Track Maintenance
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed mb-space-md">
                  Narrow-gauge track clearance, fallen pine obstruction, VIP
                  convoy clearance, or scheduled coal bunker restock.
                </p>
                <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant font-semibold">
                  <span className="material-symbols-outlined text-[16px]">
                    handyman
                  </span>
                  <span>Manual Staff Advisory Template</span>
                </div>
              </div>
            </div>

            {/* Action Footer for Step 1 */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md p-space-md bg-surface-container-low rounded-xl">
              <div className="flex items-center gap-space-xs text-on-surface-variant">
                <span className="material-symbols-outlined text-[20px] text-secondary">
                  verified_user
                </span>
                <span className="font-body-sm text-body-sm">
                  Preset triggers auto-drafted for Toy Train #52541
                </span>
              </div>
              <button
                onClick={() => handleStepSubmit(2)}
                type="button"
                className="w-full sm:w-auto h-12 px-space-lg bg-primary text-on-primary rounded-lg font-label-lg text-label-lg flex items-center justify-center gap-space-xs hover:bg-primary-container transition-colors shadow-md font-semibold"
              >
                <span>Continue to Disruption Details</span>
                <span className="material-symbols-outlined text-[20px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: INCIDENT DETAILS */}
        {currentStep === 2 && (
          <div className="flex flex-col w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-xs">
              <div>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
                  Input Incident Data
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold mt-0.5">
                  Disruption Specifics &amp; Passenger Relief
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Refine locomotive identity, estimated delay window, and
                  passenger welfare arrangements.
                </p>
              </div>
              <button
                onClick={() => setCurrentStep(1)}
                type="button"
                className="h-10 px-space-md bg-surface-container text-on-surface rounded-lg font-label-md text-label-md flex items-center gap-1 hover:bg-surface-container-high transition-colors self-start md:self-auto"
              >
                <span className="material-symbols-outlined text-[18px]">
                  arrow_back
                </span>
                <span>Back to Archetypes</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl mb-space-xl">
              {/* Form Left Column (8 cols) */}
              <div className="lg:col-span-8 flex flex-col gap-space-lg">
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
                  <div>
                    <label
                      htmlFor="train-service-select"
                      className="font-label-md text-label-md text-on-surface block mb-1 font-semibold"
                    >
                      Select Affected Toy Train Service
                    </label>
                    <div className="relative">
                      <select
                        id="train-service-select"
                        value={selectedTrain}
                        onChange={(e) => setSelectedTrain(e.target.value)}
                        className="w-full h-12 bg-surface-container-low text-on-surface rounded-lg px-space-md font-body-md text-body-md appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-secondary"
                      >
                        <option value="52541">
                          #52541 Steam Joy Ride (Darjeeling — Ghum — Batasia
                          Loop return)
                        </option>
                        <option value="52540">
                          #52540 NJP — Darjeeling Heritage Passenger (Down)
                        </option>
                        <option value="52542">
                          #52542 Darjeeling — Kurseong Diesel Safari Special
                        </option>
                        <option value="52588">
                          #52588 Red Panda Steam Special (Darjeeling — Ghum)
                        </option>
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-3 text-on-surface-variant pointer-events-none">
                        expand_more
                      </span>
                    </div>
                  </div>

                  {/* Delay Duration Quick Selector */}
                  <div>
                    <span className="font-label-md text-label-md text-on-surface block mb-space-xs font-semibold">
                      Estimated Delay Duration
                    </span>
                    <div className="flex flex-wrap gap-space-xs">
                      {[
                        "15 min",
                        "30 min",
                        "45 min (Active)",
                        "1 hour",
                        "2+ hours",
                        "Indefinite / Road Only",
                      ].map((dur) => {
                        const isSelected = selectedDuration.includes(dur.split(" ")[0]);
                        return (
                          <button
                            key={dur}
                            type="button"
                            onClick={() => setSelectedDuration(dur)}
                            className={`h-10 px-space-md rounded-lg font-label-sm text-label-sm transition-colors ${
                              isSelected
                                ? "bg-primary text-on-primary font-bold shadow-sm"
                                : "bg-surface-container text-on-surface hover:bg-surface-container-high"
                            }`}
                          >
                            {dur}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Incident Narrative Input */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label
                        htmlFor="incident-reason"
                        className="font-label-md text-label-md text-on-surface font-semibold"
                      >
                        Incident Reason &amp; Official Staff Disruption Log
                      </label>
                      <span className="font-label-sm text-label-sm text-secondary flex items-center gap-1 font-semibold">
                        <span className="material-symbols-outlined text-[14px]">
                          auto_fix_high
                        </span>{" "}
                        Offline Matcher Ready
                      </span>
                    </div>
                    <textarea
                      id="incident-reason"
                      rows={3}
                      value={incidentReason}
                      onChange={(e) => {
                        const val = e.target.value;
                        setIncidentReason(val);
                        runProcessInput(val);
                      }}
                      placeholder="Type disruption status (e.g., 'Toy train cancelled because of heavy rain')..."
                      className="w-full bg-surface-container-low text-on-surface rounded-lg p-space-md font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary leading-relaxed resize-none"
                    />
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Type any status string (e.g. <em>"Toy train cancelled because of heavy rain"</em>). The local offline matcher will identify the scenario automatically.
                    </p>
                  </div>
                </div>

                {/* Relief Measures Toggles Card */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md">
                  <h3 className="font-headline-sm text-headline-sm text-primary font-bold">
                    Station Relief &amp; Passenger Welfare Directives
                  </h3>

                  {/* Toggle 1 */}
                  <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-10 h-10 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center">
                          <span className="material-symbols-outlined text-[22px]">
                            airport_shuttle
                          </span>
                        </div>
                        <div>
                          <span className="font-label-lg text-label-lg text-on-surface block font-semibold">
                            Alternative Road Transport Arranged
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Pre-arranged Sumo hill taxis from station forecourt
                          </span>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={toggleTransport}
                          onChange={(e) => setToggleTransport(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:bg-secondary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                      </label>
                    </div>
                  </div>

                  {/* Toggle 2 */}
                  <div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-space-xs">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-10 h-10 rounded-lg bg-secondary-container text-on-secondary-container flex items-center justify-center">
                          <span className="material-symbols-outlined text-[22px]">
                            payments
                          </span>
                        </div>
                        <div>
                          <span className="font-label-lg text-label-lg text-on-surface block font-semibold">
                            Refund &amp; Rebooking Counter Active
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            Instant full fare waiver at station booking office
                          </span>
                        </div>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={toggleRefund}
                          onChange={(e) => setToggleRefund(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-surface-container-highest rounded-full peer peer-checked:bg-secondary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-surface-container-lowest after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>

              {/* SLM Preview Column (4 cols) */}
              <div className="lg:col-span-4 flex flex-col gap-space-md">
                <div className="p-space-lg rounded-xl bg-primary text-on-primary shadow-lg flex flex-col justify-between h-full relative overflow-hidden">
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-[20px] text-secondary-fixed">
                          memory
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary-fixed uppercase tracking-wider font-bold">
                          Local Matcher
                        </span>
                      </div>
                      <span className="px-space-xs py-0.5 rounded bg-primary-container text-on-primary-container font-label-sm text-label-sm font-semibold">
                        Offline Knowledge Base
                      </span>
                    </div>

                    {resolvedResult && (
                      <div className="bg-primary-container/90 rounded-lg p-space-md text-on-primary space-y-2">
                        <div className="font-label-sm text-label-sm text-secondary-fixed font-bold uppercase">
                          Matched Scenario:
                        </div>
                        <div className="font-headline-sm text-headline-sm font-bold">
                          {resolvedResult.scenario.explanations.en.title}
                        </div>
                        <div className="text-xs text-on-primary-container font-mono">
                          ID: {resolvedResult.analysis.scenarioId} | Action: {resolvedResult.recommendedAction}
                        </div>
                        <p className="text-xs italic leading-relaxed pt-1">
                          "{resolvedResult.explanation.explanation}"
                        </p>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => handleStepSubmit(3)}
                    type="button"
                    className="mt-space-lg w-full h-12 rounded-lg bg-secondary-fixed text-on-secondary-fixed font-label-lg text-label-lg font-bold flex items-center justify-center gap-space-xs hover:bg-secondary-fixed-dim transition-colors shadow-md"
                  >
                    <span>Generate Multilingual Broadcast</span>
                    <span className="material-symbols-outlined text-[20px]">
                      auto_awesome
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: MULTILINGUAL BROADCAST */}
        {currentStep === 3 && (
          <div className="flex flex-col w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-lg gap-space-xs">
              <div>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest font-bold">
                  Final Inspection &amp; Trigger
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary font-bold mt-0.5">
                  Multilingual Station Broadcast Ready
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Review generated phonetic translations and trigger local
                  display kiosk, PA audio, and passenger QR pass sync.
                </p>
              </div>
              <button
                onClick={() => setCurrentStep(2)}
                type="button"
                className="h-10 px-space-md bg-surface-container text-on-surface rounded-lg font-label-md text-label-md flex items-center gap-1 hover:bg-surface-container-high transition-colors self-start md:self-auto"
              >
                <span className="material-symbols-outlined text-[18px]">
                  arrow_back
                </span>
                <span>Edit Incident Details</span>
              </button>
            </div>

            {resolvedResult && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg mb-space-xl">
                {/* English Card */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md border-l-4 border-primary flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-primary font-bold flex items-center gap-2">
                      <span>🇬🇧</span> English Announcement
                    </span>
                    <span className="px-space-xs py-0.5 rounded bg-primary-container text-on-primary-container font-label-sm text-label-sm font-semibold">
                      Knowledge Base Validated
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    {resolvedResult.scenario.explanations.en.title}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                    {resolvedResult.scenario.explanations.en.explanation}
                  </p>
                  <p className="font-body-sm text-body-sm text-primary font-semibold">
                    Action: {resolvedResult.scenario.explanations.en.action}
                  </p>
                </div>

                {/* Hindi Card */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md border-l-4 border-secondary flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-secondary font-bold flex items-center gap-2">
                      <span>🇮🇳</span> हिंदी (Hindi)
                    </span>
                    <span className="px-space-xs py-0.5 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                      Native Script
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    {resolvedResult.scenario.explanations.hi.title}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                    {resolvedResult.scenario.explanations.hi.explanation}
                  </p>
                  <p className="font-body-sm text-body-sm text-secondary font-semibold">
                    कार्रवाई: {resolvedResult.scenario.explanations.hi.action}
                  </p>
                </div>

                {/* Bengali Card */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md border-l-4 border-tertiary-container flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-tertiary-container font-bold flex items-center gap-2">
                      <span>🇧🇩</span> বাংলা (Bengali)
                    </span>
                    <span className="px-space-xs py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
                      Native Script
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    {resolvedResult.scenario.explanations.bn.title}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                    {resolvedResult.scenario.explanations.bn.explanation}
                  </p>
                  <p className="font-body-sm text-body-sm text-tertiary-container font-semibold">
                    করোণীয়: {resolvedResult.scenario.explanations.bn.action}
                  </p>
                </div>

                {/* Nepali Card */}
                <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md border-l-4 border-primary-container flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-primary-container font-bold flex items-center gap-2">
                      <span>🇳🇵</span> नेपाली (Nepali)
                    </span>
                    <span className="px-space-xs py-0.5 rounded bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">
                      Native Script
                    </span>
                  </div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    {resolvedResult.scenario.explanations.ne.title}
                  </h4>
                  <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                    {resolvedResult.scenario.explanations.ne.explanation}
                  </p>
                  <p className="font-body-sm text-body-sm text-primary-container font-semibold">
                    कार्य: {resolvedResult.scenario.explanations.ne.action}
                  </p>
                </div>
              </div>
            )}

            {/* Final Action Bar */}
            <div className="p-space-lg rounded-2xl bg-surface-container-high shadow-md flex flex-col md:flex-row items-center justify-between gap-space-md">
              <div className="flex items-center gap-space-md">
                <div className="w-12 h-12 rounded-xl bg-primary text-on-primary flex items-center justify-center font-bold">
                  <span className="material-symbols-outlined text-[28px]">
                    record_voice_over
                  </span>
                </div>
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-primary font-bold">
                    Broadcast to All Display Terminals &amp; Station PA
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Pushes updates via 868MHz local mesh to waiting hall kiosk
                    and generates instant passenger mobile QR pass.
                  </p>
                </div>
              </div>
              <button
                onClick={onNavigateToPassenger}
                type="button"
                className="w-full md:w-auto h-14 px-space-lg bg-primary text-on-primary rounded-xl font-headline-sm text-headline-sm font-bold flex items-center justify-center gap-space-xs hover:bg-primary-container transition-all shadow-lg active:scale-95"
              >
                <span>Broadcast &amp; View Passenger Display</span>
                <span className="material-symbols-outlined text-[24px]">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
