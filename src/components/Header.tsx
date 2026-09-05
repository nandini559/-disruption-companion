import { useState, useEffect } from "react";
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

const TABS: { key: TabKey; label: string }[] = [
    { key: "home", label: "Home" },
    { key: "staff-mode", label: "Staff Mode" },
    { key: "passenger-tablet-display", label: "Passenger Tablet Display" },
    { key: "passenger-mobile-qr-view", label: "Passenger Mobile / QR View" },
    { key: "components-edge-states", label: "Components & Edge States" },
];

export function Header({ activeTab, setActiveTab }: HeaderProps) {
    const [menuOpen, setMenuOpen] = useState(false);

    // Close the mobile menu whenever the viewport grows to the desktop breakpoint.
    useEffect(() => {
        const mql = window.matchMedia("(min-width: 1024px)");
        const handleChange = (e: MediaQueryListEvent) => {
            if (e.matches) setMenuOpen(false);
        };
        mql.addEventListener("change", handleChange);
        return () => mql.removeEventListener("change", handleChange);
    }, []);

    // Prevent body scroll while the mobile menu is open.
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    const handleSelect = (tab: TabKey) => {
        setActiveTab(tab);
        setMenuOpen(false);
    };

    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur-xl border-b border-outline-variant/40 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
            <div className="h-16 md:h-20 max-w-7xl mx-auto px-margin-mobile lg:px-margin-desktop flex items-center justify-between gap-space-md">
                {/* Brand logo & title */}
                <button
                    type="button"
                    className="flex items-center gap-space-sm shrink-0 min-w-0 cursor-pointer text-left rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                    onClick={() => handleSelect("home")}
                    aria-label="Go to home"
                >
                    <DhrLogo className="h-8 w-8 md:h-9 md:w-9 shrink-0 object-contain" />
                    <div className="flex flex-col min-w-0">
                        <div className="flex items-center gap-space-xs">
                            <span className="font-headline-sm text-headline-sm text-primary tracking-tight font-bold truncate">
                                DHR Sahayak
                            </span>
                            <span className="hidden sm:inline-block px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase whitespace-nowrap">
                                Heritage Hill Rail
                            </span>
                        </div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant hidden md:inline-block truncate">
                            Darjeeling Himalayan Railway • Station Disruption Companion
                        </span>
                    </div>
                </button>

                {/* Desktop navigation tabs */}
                <nav className="hidden lg:flex items-center gap-space-2xs bg-surface-container-low p-1.5 rounded-xl shadow-[0_1px_4px_rgba(22,74,65,0.04)]">
                    {TABS.map((tab) => {
                        const isActive = activeTab === tab.key;
                        return (
                            <button
                                key={tab.key}
                                type="button"
                                onClick={() => setActiveTab(tab.key)}
                                aria-current={isActive ? "page" : undefined}
                                className={`px-space-sm py-2 transition-colors rounded-lg whitespace-nowrap text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${isActive
                                    ? "bg-primary-container text-on-primary-container font-label-lg font-semibold shadow-sm"
                                    : "font-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        );
                    })}
                </nav>

                {/* Top right actions / badges */}
                <div className="flex items-center gap-space-xs shrink-0">
                    <div className="hidden xl:flex items-center gap-space-xs px-space-sm py-1.5 rounded-full bg-secondary-container/60 shadow-[inset_0_1px_1px_rgba(0,0,0,0.04)]">
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
                        </span>
                        <span className="font-label-sm text-label-sm text-on-secondary-container font-bold tracking-wide">
                            Offline Ready
                        </span>
                    </div>

                    <div className="hidden xl:flex items-center gap-1 px-space-sm py-1.5 rounded-full bg-surface-container-high text-on-surface">
                        <span className="material-symbols-outlined text-[16px] text-secondary">
                            location_on
                        </span>
                        <span className="font-label-sm text-label-sm font-semibold whitespace-nowrap">
                            Ghum (2,258 m)
                        </span>
                    </div>

                    <button
                        type="button"
                        className="h-9 w-9 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                        title="Station Emergency Desk Help"
                        aria-label="Station Desk Help"
                    >
                        <span className="material-symbols-outlined text-[20px] text-secondary">
                            support_agent
                        </span>
                    </button>

                    <div className="hidden sm:flex w-8 h-8 rounded-full bg-primary items-center justify-center">
                        <span className="material-symbols-outlined text-on-primary text-[18px]">
                            person
                        </span>
                    </div>

                    {/* Mobile menu toggle */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen((open) => !open)}
                        className="lg:hidden h-9 w-9 rounded-full bg-surface-container flex items-center justify-center hover:bg-surface-container-high transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={menuOpen}
                        aria-controls="mobile-nav"
                    >
                        <span className="material-symbols-outlined text-[22px] text-on-surface">
                            {menuOpen ? "close" : "menu"}
                        </span>
                    </button>
                </div>
            </div>

            {/* Mobile: dim backdrop behind the drawer */}
            <div
                onClick={() => setMenuOpen(false)}
                aria-hidden="true"
                className={`lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-black/40 transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
            />

            {/* Mobile navigation drawer (full-width, solid panel) */}
            <div
                className={`lg:hidden absolute top-16 inset-x-0 z-50 origin-top transition-all duration-300 ease-in-out ${menuOpen
                    ? "opacity-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 -translate-y-2 pointer-events-none"
                    }`}
            >
                <nav
                    id="mobile-nav"
                    className="w-full bg-surface border-b border-outline-variant/40 shadow-[0_12px_24px_rgba(0,0,0,0.12)] px-margin-mobile py-space-sm flex flex-col gap-space-2xs max-h-[calc(100vh-4rem)] overflow-y-auto"
                >
                    {TABS.map((tab) => {
                        const isActive = activeTab === tab.key;
                        return (
                            <button
                                key={tab.key}
                                type="button"
                                onClick={() => handleSelect(tab.key)}
                                aria-current={isActive ? "page" : undefined}
                                className={`w-full flex items-center justify-between gap-space-sm text-left px-space-md py-3.5 transition-colors rounded-xl text-body-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${isActive
                                    ? "bg-primary-container text-on-primary-container font-semibold shadow-sm"
                                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
                                    }`}
                            >
                                <span className="truncate">{tab.label}</span>
                                {isActive && (
                                    <span className="material-symbols-outlined text-[18px] shrink-0">
                                        check
                                    </span>
                                )}
                            </button>
                        );
                    })}

                    {/* Status badges surfaced inside the mobile menu */}
                    <div className="flex flex-wrap items-center gap-space-xs mt-space-xs pt-space-sm border-t border-outline-variant/40">
                        <div className="flex items-center gap-space-xs px-space-sm py-1.5 rounded-full bg-secondary-container/60">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
                            </span>
                            <span className="font-label-sm text-label-sm text-on-secondary-container font-bold tracking-wide">
                                Offline Ready
                            </span>
                        </div>
                        <div className="flex items-center gap-1 px-space-sm py-1.5 rounded-full bg-surface-container-high text-on-surface">
                            <span className="material-symbols-outlined text-[16px] text-secondary">
                                location_on
                            </span>
                            <span className="font-label-sm text-label-sm font-semibold whitespace-nowrap">
                                Ghum (2,258 m)
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}
