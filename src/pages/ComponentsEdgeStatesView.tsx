export function ComponentsEdgeStatesView() {
  return (
    <div className="flex flex-col w-full">
      {/* Top Diagnostic Banner */}
      <div className="relative w-full rounded-2xl bg-surface-container-high overflow-hidden p-space-lg lg:p-space-xl shadow-md mb-space-2xl">
        <div className="absolute -right-16 -bottom-16 w-80 h-80 rounded-full bg-secondary-fixed/20 blur-3xl pointer-events-none"></div>
        <div className="absolute -left-12 -top-12 w-64 h-64 rounded-full bg-primary-fixed/20 blur-2xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-space-lg">
          <div className="flex flex-col gap-space-xs max-w-2xl">
            <div className="flex items-center gap-space-xs flex-wrap">
              <span className="px-space-xs py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-wider font-bold">
                Design System &amp; Protocol Audit
              </span>
              <span className="px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm flex items-center gap-1 font-semibold">
                <span className="material-symbols-outlined text-[14px]">
                  verified
                </span>
                NFR Katihar Div Standard
              </span>
              <span className="text-on-surface-variant font-label-sm text-label-sm font-semibold">
                Station Hub: Ghum (2,258 m)
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
              Components, Dialogue Modals &amp; Resilient Edge States
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Standardized offline UI tokens, passenger exception dialogs, and
              edge telemetry verified for low-bandwidth Himalayan topography
              and bilingual high-altitude stations.
            </p>
          </div>

          {/* Telemetry Snapshot Widget */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm bg-surface-container-lowest p-space-sm rounded-xl shadow-sm shrink-0">
            <div className="flex items-center gap-space-xs px-space-xs">
              <div className="w-10 h-10 rounded-lg bg-secondary-fixed flex items-center justify-center text-primary font-headline-sm text-headline-sm font-bold">
                4.2k
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Cached Phrases
                </span>
                <span className="font-label-md text-label-md text-primary font-bold">
                  Nepali • Bengali • Hindi
                </span>
              </div>
            </div>
            <div className="h-8 w-px bg-outline-variant/40 hidden sm:block"></div>
            <div className="flex items-center gap-space-xs px-space-xs">
              <div className="w-3 h-3 rounded-full bg-secondary animate-pulse"></div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  Edge Gateway
                </span>
                <span className="font-label-md text-label-md text-secondary font-bold">
                  Broadcasting 868MHz
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 1: System Dialogs & Operational Overlays */}
      <div className="flex flex-col gap-space-md mb-space-3xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <span className="w-2.5 h-6 rounded bg-primary"></span>
            <h2 className="font-headline-md text-headline-md text-primary font-bold">
              System Dialogs &amp; Operational Overlays
            </h2>
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">
            3 Architectural Scenarios
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-space-lg items-start">
          {/* MODAL 1: Refund Procedure */}
          <div className="flex flex-col bg-surface-container-lowest rounded-2xl p-space-lg shadow-md hover:shadow-xl transition-shadow relative overflow-hidden">
            <div className="h-1.5 w-full bg-primary absolute top-0 left-0"></div>
            <div className="flex items-center justify-between gap-space-xs mb-space-sm">
              <span className="px-space-xs py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm font-semibold">
                DHR Ref-Rule 54/A
              </span>
              <div className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px]">
                  currency_rupee
                </span>
              </div>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-primary mb-space-xs font-bold">
              Ticket Refund Procedure
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
              Your ticket is eligible for a{" "}
              <strong className="text-on-surface font-semibold">
                100% full refund
              </strong>{" "}
              because Toy Train #52541 has been delayed beyond 30 minutes due
              to weather.
            </p>

            {/* Process Checklist */}
            <div className="flex flex-col gap-space-sm bg-surface-container-low p-space-sm rounded-xl mb-space-md">
              <div className="flex items-start gap-space-xs">
                <span className="w-5 h-5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  1
                </span>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Keep Ticket / Digital PNR
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Paper ticket or QR passenger pass.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-space-xs">
                <span className="w-5 h-5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  2
                </span>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Visit Station Counter 1
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Dedicated mountain disruption wicket.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-space-xs">
                <span className="w-5 h-5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  3
                </span>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    Instant Cash / UPI Credit
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    Zero cancellation fee applied.
                  </span>
                </div>
              </div>
            </div>

            <div className="p-space-xs bg-surface-container rounded-lg flex items-center gap-space-xs mb-space-md">
              <span className="material-symbols-outlined text-[18px] text-secondary shrink-0">
                support_agent
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Station Desk Staff Hotline:{" "}
                <strong className="text-on-surface font-semibold">
                  Ghum Ext. 104
                </strong>
              </span>
            </div>

            <button
              type="button"
              className="w-full h-11 rounded-lg bg-primary text-on-primary font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 hover:bg-primary-container transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">
                receipt_long
              </span>
              Generate PNR Voucher
            </button>
          </div>

          {/* MODAL 2: Emergency Transport */}
          <div className="flex flex-col bg-surface-container-lowest rounded-2xl p-space-lg shadow-md hover:shadow-xl transition-shadow relative overflow-hidden">
            <div className="h-1.5 w-full bg-secondary absolute top-0 left-0"></div>
            <div className="flex items-center justify-between gap-space-xs mb-space-sm">
              <span className="px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm font-semibold">
                Active Transport Relief
              </span>
              <div className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px]">
                  airport_shuttle
                </span>
              </div>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-secondary mb-space-xs font-bold">
              Emergency Road Transport Fleet
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
              Continuous shuttle deployment for stranded passengers along Hill
              Cart Road during narrow-gauge track suspension.
            </p>

            <div className="flex flex-col gap-space-xs bg-surface-container-low p-space-sm rounded-xl mb-space-md font-body-sm text-body-sm">
              <div className="flex justify-between items-center py-1 border-b border-outline-variant/30">
                <span className="text-on-surface-variant">Fleet Status</span>
                <span className="font-semibold text-on-surface">
                  4 Hill Shuttles Standby
                </span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-outline-variant/30">
                <span className="text-on-surface-variant">Boarding Bay</span>
                <span className="font-semibold text-primary">
                  Forecourt Gate 2 (West Outgate)
                </span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-outline-variant/30">
                <span className="text-on-surface-variant">Destination</span>
                <span className="font-semibold text-on-surface">
                  Chowrasta, Darjeeling
                </span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-on-surface-variant">Transit Window</span>
                <span className="font-semibold text-secondary">
                  7.2 km (~12 mins departure)
                </span>
              </div>
            </div>

            <div className="p-space-xs bg-surface-container rounded-lg flex items-center gap-space-xs mb-space-md">
              <span className="material-symbols-outlined text-[18px] text-secondary shrink-0">
                badge
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Coordinator:{" "}
                <strong className="text-on-surface font-semibold">
                  Insp. B. Tamang
                </strong>{" "}
                (Badge: DHR-MV-012)
              </span>
            </div>

            <button
              type="button"
              className="w-full h-11 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 hover:bg-secondary-container transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">
                directions_bus
              </span>
              View Route &amp; Assistance Staff
            </button>
          </div>

          {/* MODAL 3: Offline Node Health */}
          <div className="flex flex-col bg-surface-container-lowest rounded-2xl p-space-lg shadow-md hover:shadow-xl transition-shadow relative overflow-hidden">
            <div className="h-1.5 w-full bg-tertiary-container absolute top-0 left-0"></div>
            <div className="flex items-center justify-between gap-space-xs mb-space-sm">
              <span className="px-space-xs py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
                Hardware Node: GHUM-0101
              </span>
              <div className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px]">
                  dns
                </span>
              </div>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-tertiary-container mb-space-xs font-bold">
              Station Offline Node Health
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md leading-relaxed">
              Autonomous edge server hosting local models, synthesized voice
              caches, and mesh radio relays for mountain cut-off resilience.
            </p>

            <div className="flex flex-col gap-space-xs bg-surface-container-low p-space-sm rounded-xl mb-space-md font-body-sm text-body-sm">
              <div className="flex items-center justify-between py-1 border-b border-outline-variant/30">
                <div>
                  <div className="font-semibold text-on-surface">
                    Local SLM Translation
                  </div>
                  <div className="text-[11px] text-on-surface-variant">
                    7.2s Tiny model on edge NPU
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-primary-fixed text-on-primary-fixed-variant text-[11px] font-bold">
                  4.2k Ready
                </span>
              </div>

              <div className="flex items-center justify-between py-1 border-b border-outline-variant/30">
                <div>
                  <div className="font-semibold text-on-surface">
                    Audio Synthesis Cache
                  </div>
                  <div className="text-[11px] text-on-surface-variant">
                    Pre-rendered railway advisories
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-secondary-container text-on-secondary-container text-[11px] font-bold">
                  100% Pre-cut
                </span>
              </div>

              <div className="flex items-center justify-between py-1">
                <div>
                  <div className="font-semibold text-on-surface">
                    Radio Mesh &amp; Wi-Fi
                  </div>
                  <div className="text-[11px] text-on-surface-variant">
                    868 MHz LoRa + Wi-Fi Direct
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded bg-secondary-fixed text-on-secondary-fixed text-[11px] font-bold">
                  100% Signal
                </span>
              </div>
            </div>

            <div className="p-space-xs bg-surface-container rounded-lg flex items-center gap-space-xs mb-space-md">
              <span className="material-symbols-outlined text-[18px] text-secondary shrink-0">
                sync
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                Last Local Sync:{" "}
                <strong className="text-on-surface font-semibold">
                  08:30 AM (Auto Mesh)
                </strong>
              </span>
            </div>

            <button
              type="button"
              className="w-full h-11 rounded-lg bg-primary-container text-on-primary-container font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 hover:bg-primary transition-colors hover:text-on-primary shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">
                restart_alt
              </span>
              Trigger Manual Sync Mesh
            </button>
          </div>
        </div>
      </div>

      {/* SECTION 2: Edge & Exception States Catalog */}
      <div className="flex flex-col gap-space-md mb-space-2xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-space-xs">
            <span className="w-2.5 h-6 rounded bg-secondary"></span>
            <h2 className="font-headline-md text-headline-md text-primary font-bold">
              Edge &amp; Exception States Catalog
            </h2>
          </div>
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider font-bold">
            Handling Severe Topography, Offline Initializers &amp; Power Failures
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
          {/* Card Alpha */}
          <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-space-sm">
              <div className="w-3 h-3 rounded-full bg-secondary"></div>
              <div>
                <div className="font-label-md text-label-md text-on-surface font-bold">
                  Condition Alpha: Normal Line Clear
                </div>
                <div className="font-body-sm text-body-sm text-on-surface-variant">
                  Steam locomotive track clear, standard timetable
                </div>
              </div>
            </div>
            <span className="font-label-sm text-label-sm text-secondary font-mono">
              Elevation: 2,258 m
            </span>
          </div>

          {/* Card Amber */}
          <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-space-sm">
              <div className="w-3 h-3 rounded-full bg-tertiary-container animate-ping"></div>
              <div>
                <div className="font-label-md text-label-md text-on-surface font-bold">
                  Condition Amber: Weather Assessment in Progress
                </div>
                <div className="font-body-sm text-body-sm text-on-surface-variant">
                  Monsoon heavy cloud burst alert at Batasia Loop
                </div>
              </div>
            </div>
            <span className="font-label-sm text-label-sm text-tertiary-container font-mono">
              Hold Period: 45 min
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
