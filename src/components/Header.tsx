import { DhrLogo } from "./DhrLogo";

export type TabKey =
  | "home"
  | "staff-mode"
  | "passenger-tablet-display"
  | "passenger-mobile-qr-view"
  | "components-edge-states";

interface HeaderProps {
  activeTab: TabKey;
  setActiveTab: (tab: TabKey) => void;
}

export function Header({ activeTab, setActiveTab }: HeaderProps) {
  const tabs: { key: TabKey; label: string }[] = [
    { key: "home", label: "Home" },
    { key: "staff-mode", label: "Staff Mode" },
    { key: "passenger-tablet-display", label: "Passenger Tablet Display" },
    { key: "passenger-mobile-qr-view", label: "Passenger Mobile / QR View" },
    { key: "components-edge-states", label: "Components & Edge States" },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-margin-mobile lg:px-margin-desktop flex items-center justify-between gap-space-md">
        {/* Brand logo & title */}
        <div
          className="flex items-center gap-space-sm shrink-0 cursor-pointer"
          onClick={() => setActiveTab("home")}
        >
          <DhrLogo className="h-8 w-auto object-contain" />
          <div className="flex flex-col">
            <div className="flex items-center gap-space-xs">
              <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold">
                DHR Sahayak
              </span>
              <span className="px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase">
                Heritage Hill Rail
              </span>
            </div>
            <span className="font-label-sm text-label-sm text-on-surface-variant hidden sm:inline-block">
              Darjeeling Himalayan Railway • Station Disruption Companion
            </span>
          </div>
        </div>

        {/* Navigation Tabs */}
        <nav className="flex flex-wrap items-center gap-space-2xs md:gap-space-xs bg-surface-container-low p-1 rounded-xl shadow-[0_1px_4px_rgba(22,74,65,0.04)] overflow-x-auto max-w-full">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-2 md:px-space-sm py-1.5 md:py-2 transition-colors rounded-lg whitespace-nowrap text-xs md:text-sm ${
                  isActive
                    ? "bg-primary-container text-on-primary-container font-label-lg font-semibold shadow-sm"
                    : "font-label-md text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Top Right Actions / Badges */}
        <div className="flex items-center gap-space-xs shrink-0">
          <div className="hidden md:flex items-center gap-space-xs px-space-sm py-1.5 rounded-full bg-secondary-container/60 shadow-[inset_0_1px_1px_rgba(0,0,0,0.04)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
            </span>
            <span className="font-label-sm text-label-sm text-on-secondary-container font-bold tracking-wide">
              Offline Ready
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-1 px-space-sm py-1.5 rounded-full bg-surface-container-high text-on-surface">
            <span className="material-symbols-outlined text-[16px] text-secondary">
              location_on
            </span>
            <span className="font-label-sm text-label-sm font-semibold">
              Ghum (2,258 m)
            </span>
          </div>

          <button
            type="button"
            className="h-9 w-9 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors"
            title="Station Emergency Desk Help"
            aria-label="Station Desk Help"
          >
            <span className="material-symbols-outlined text-[20px] text-secondary">
              support_agent
            </span>
          </button>

          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]">
              person
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
