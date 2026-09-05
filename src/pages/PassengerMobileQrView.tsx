import type { ResolvedDisruption } from "../types/disruption";

interface PassengerMobileQrViewProps {
    activeDisruption?: ResolvedDisruption | null;
}

export function PassengerMobileQrView({ activeDisruption }: PassengerMobileQrViewProps) {
    const title = activeDisruption?.explanation.title || "Service Delayed Alert • Joy Ride #52541";
    const explanation = activeDisruption?.explanation.explanation || "Your train to Darjeeling is delayed due to heavy monsoon rainfall and track clearance near Batasia Loop.";
    const action = activeDisruption?.recommendedAction || "WAIT";
    const scenarioId = activeDisruption?.analysis.scenarioId || "train-delayed";

    return (
        <div className="flex flex-col w-full">
            <div className="flex flex-col gap-space-xl">
                {/* Top Hero Ribbon */}
                <div className="relative overflow-hidden rounded-2xl bg-surface-container-low shadow-md p-space-lg lg:p-space-xl">
                    <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-secondary-fixed/30 blur-3xl pointer-events-none"></div>
                    <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-space-lg">
                        <div className="flex flex-col gap-space-xs max-w-3xl">
                            <div className="flex flex-wrap items-center gap-space-xs">
                                <span className="px-space-xs py-0.5 rounded bg-primary-container text-on-primary-container font-label-sm text-label-sm uppercase tracking-wider font-bold">
                                    Station Kiosk Hand-off
                                </span>
                                <span className="px-space-xs py-0.5 rounded-full bg-surface-container-highest text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1 font-semibold">
                                    <span className="material-symbols-outlined text-[14px] text-secondary">
                                        cell_tower
                                    </span>
                                    Local Sub-Gigahertz Mesh Broadcast Active
                                </span>
                            </div>
                            <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight font-bold">
                                Passenger Mobile QR View &amp; Pocket Companion
                            </h1>
                            <p className="font-body-md text-body-md text-on-surface-variant">
                                Seamlessly transfer active disruption passes, offline elevation
                                routes, and synthesized multilingual audio alerts directly from
                                the Ghum station terminal onto any passenger smartphone without
                                cellular data.
                            </p>
                        </div>

                        {/* Quick Telemetry Chips */}
                        <div className="flex flex-row sm:flex-col gap-space-xs shrink-0 self-stretch sm:self-auto justify-between sm:justify-start bg-surface-container p-space-sm rounded-xl shadow-sm">
                            <div className="flex items-center gap-space-xs">
                                <span className="material-symbols-outlined text-secondary text-[20px]">
                                    offline_pin
                                </span>
                                <div>
                                    <div className="font-label-sm text-label-sm text-on-surface-variant">
                                        Active Payload ID
                                    </div>
                                    <div className="font-headline-sm text-headline-sm text-primary font-bold">
                                        {scenarioId}
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-space-xs pt-space-2xs">
                                <span className="material-symbols-outlined text-tertiary-container text-[20px]">
                                    wifi_tethering
                                </span>
                                <div>
                                    <div className="font-label-sm text-label-sm text-on-surface-variant">
                                        Action Mode
                                    </div>
                                    <div className="font-label-md text-label-md text-on-surface font-bold">
                                        {action}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Dual Panel */}
                <div className="grid grid-cols-1 xl:grid-cols-12 gap-space-xl items-start">
                    {/* LEFT: Station Modal Container (5 Cols) */}
                    <div className="xl:col-span-5 flex flex-col gap-space-lg">
                        <div className="bg-surface-container-lowest rounded-2xl shadow-xl p-space-lg lg:p-space-xl flex flex-col gap-space-lg relative overflow-hidden">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-space-xs">
                                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-on-primary">
                                        <span className="material-symbols-outlined text-[20px]">
                                            train
                                        </span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="font-headline-sm text-headline-sm text-primary leading-tight font-bold">
                                            Continue on your phone
                                        </span>
                                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                                            Ghum Junction • UNESCO Heritage Station
                                        </span>
                                    </div>
                                </div>
                                <span className="px-space-xs py-1 rounded bg-secondary-container text-on-secondary-container font-label-sm text-label-sm flex items-center gap-1 font-bold">
                                    <span className="material-symbols-outlined text-[15px]">
                                        sensors
                                    </span>
                                    PWA Instant
                                </span>
                            </div>

                            <p className="font-body-sm text-body-sm text-on-surface-variant">
                                Point your phone camera here to carry this disruption advice,
                                live timetable updates, audio translation, and your digital
                                refund clearance pass straight into your pocket.
                            </p>

                            {/* QR Container */}
                            <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col items-center justify-center relative shadow-sm">
                                <img src="/gdg-qr.png" alt="" />
                            </div>

                            {/* Step instructions */}
                            <div className="flex flex-col gap-space-xs text-on-surface-variant font-body-sm text-body-sm">
                                <div className="flex items-start gap-space-xs">
                                    <span className="w-5 h-5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center shrink-0 mt-0.5 font-bold">
                                        1
                                    </span>
                                    <span>
                                        Open your camera app to carry active disruption pass on phone.
                                    </span>
                                </div>
                                <div className="flex items-start gap-space-xs">
                                    <span className="w-5 h-5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center justify-center shrink-0 mt-0.5 font-bold">
                                        2
                                    </span>
                                    <span>
                                        Connect to open network <strong>"DHR-SAHAYAK-GHUM"</strong> if offline.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Live Mobile Phone Mockup Frame (7 Cols) */}
                    <div className="xl:col-span-7 flex justify-center">
                        <div className="w-full max-w-sm rounded-[36px] bg-slate-900 p-4 shadow-2xl border-4 border-slate-700">
                            {/* Phone Inner Screen */}
                            <div className="bg-surface rounded-[28px] overflow-hidden flex flex-col text-on-surface">
                                {/* Phone Status Bar */}
                                <div className="px-5 pt-3 pb-1 flex items-center justify-between text-xs text-on-surface-variant">
                                    <span className="font-semibold">09:41 AM</span>
                                    <div className="w-16 h-4 bg-slate-900 rounded-full mx-auto"></div>
                                    <div className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[14px]">
                                            wifi
                                        </span>
                                        <span className="material-symbols-outlined text-[14px]">
                                            battery_full
                                        </span>
                                    </div>
                                </div>

                                {/* Mobile App Header */}
                                <div className="px-4 py-3 bg-surface-container-high border-b border-outline-variant/30 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <div className="w-6 h-6 rounded bg-primary text-on-primary flex items-center justify-center">
                                            <span className="material-symbols-outlined text-[14px]">
                                                train
                                            </span>
                                        </div>
                                        <div>
                                            <div className="font-headline-sm text-[14px] text-primary font-bold leading-none">
                                                DHR Sahayak
                                            </div>
                                            <div className="text-[10px] text-on-surface-variant">
                                                Ghum Jr. Station Companion
                                            </div>
                                        </div>
                                    </div>
                                    <span className="px-2 py-0.5 rounded-full bg-secondary-container text-on-secondary-container text-[10px] font-bold">
                                        Offline Pass
                                    </span>
                                </div>

                                {/* Main Content inside Phone */}
                                <div className="p-4 flex flex-col gap-3 max-h-[480px] overflow-y-auto">
                                    {/* Alert Banner */}
                                    <div className="p-2.5 rounded-xl bg-tertiary-container text-tertiary-fixed flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[20px]">
                                            warning
                                        </span>
                                        <div>
                                            <div className="text-[11px] font-bold uppercase tracking-wide">
                                                {title}
                                            </div>
                                            <div className="text-[10px] opacity-90">Action: {action}</div>
                                        </div>
                                    </div>

                                    {/* Active Explanation */}
                                    <div className="p-3 rounded-xl bg-surface-container-lowest shadow-sm space-y-1">
                                        <div className="text-[11px] font-bold text-primary">
                                            Disruption Summary
                                        </div>
                                        <div className="text-[10px] text-on-surface-variant leading-relaxed">
                                            {explanation}
                                        </div>
                                    </div>

                                    {/* Action Protocols */}
                                    <div className="space-y-2">
                                        <span className="text-[10px] font-bold uppercase text-secondary tracking-wider block">
                                            Recommended Action Protocol ({action})
                                        </span>

                                        {action === "WAIT" && (
                                            <div className="p-2.5 rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-2 border-l-2 border-primary">
                                                <span className="material-symbols-outlined text-primary text-[18px] mt-0.5">
                                                    chair
                                                </span>
                                                <div>
                                                    <div className="text-[12px] font-bold text-on-surface">
                                                        Wait in Station Waiting Hall
                                                    </div>
                                                    <div className="text-[10px] text-on-surface-variant">
                                                        Heated waiting hall open with black tea service
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {(action === "ALTERNATIVE_TRANSPORT" || action === "REFUND") && (
                                            <div className="p-2.5 rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-2 border-l-2 border-secondary">
                                                <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">
                                                    directions_bus
                                                </span>
                                                <div>
                                                    <div className="text-[12px] font-bold text-on-surface">
                                                        Alternative Road Transport
                                                    </div>
                                                    <div className="text-[10px] text-on-surface-variant">
                                                        Tata Sumo shuttles active at Forecourt Gate 2
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {action === "REFUND" && (
                                            <div className="p-2.5 rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-2 border-l-2 border-primary-container">
                                                <span className="material-symbols-outlined text-primary-container text-[18px] mt-0.5">
                                                    currency_rupee
                                                </span>
                                                <div>
                                                    <div className="text-[12px] font-bold text-on-surface">
                                                        Full Ticket Refund Option
                                                    </div>
                                                    <div className="text-[10px] text-on-surface-variant">
                                                        Counter 1 issuing 100% full cash/UPI refunds
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {action === "ANNOUNCEMENT" && (
                                            <div className="p-2.5 rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-2 border-l-2 border-secondary">
                                                <span className="material-symbols-outlined text-secondary text-[18px] mt-0.5">
                                                    record_voice_over
                                                </span>
                                                <div>
                                                    <div className="text-[12px] font-bold text-on-surface">
                                                        Listen for Audio Updates
                                                    </div>
                                                    <div className="text-[10px] text-on-surface-variant">
                                                        PA announcements playing every 15 mins
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
