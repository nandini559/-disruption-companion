import type { TabKey } from "../components/Header";

interface HomeViewProps {
  onNavigate: (tab: TabKey) => void;
}

export function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Banner Card */}
      <div className="relative w-full overflow-hidden rounded-2xl bg-surface-container-high shadow-md">
        <div className="absolute -right-16 -top-24 w-96 h-96 rounded-full bg-secondary-fixed/40 blur-3xl pointer-events-none"></div>
        <div className="absolute left-1/3 -bottom-20 w-80 h-80 rounded-full bg-primary-fixed/30 blur-2xl pointer-events-none"></div>

        <div className="relative z-10 px-margin-mobile lg:px-margin-desktop py-space-xl flex flex-col gap-space-lg">
          {/* Top badges */}
          <div className="flex flex-wrap items-center justify-between gap-space-sm">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1.5 rounded-full bg-surface-container-lowest text-primary shadow-sm">
              <span
                className="material-symbols-outlined text-secondary text-[18px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                landscape
              </span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                UNESCO World Heritage Site No. 944
              </span>
            </div>
            <div className="flex items-center gap-2 px-space-sm py-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
              </span>
              <span className="font-label-sm text-label-sm font-semibold">
                Mesh Local Protocol 868 MHz
              </span>
            </div>
          </div>

          {/* Hero Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            <div className="lg:col-span-8 flex flex-col gap-space-sm">
              <span className="font-label-md text-label-md uppercase text-secondary font-bold tracking-widest">
                Katihar Hill Division • Sahayak Companion
              </span>
              <h1 className="font-display-lg text-3xl sm:text-4xl lg:text-display-lg text-primary tracking-tight font-bold leading-tight">
                Clear guidance when your journey changes.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                Offline-first railway companion during monsoon landslides,
                cancellations, and route delays on the narrow-gauge Darjeeling
                Himalayan Toy Train corridor.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-end items-start lg:items-end">
              <div className="w-full bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Toy Train Gauge
                  </span>
                  <span className="font-label-sm text-label-sm font-bold text-primary">
                    610 mm (2 ft 0 in)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    Summit Altitude
                  </span>
                  <span className="font-label-sm text-label-sm font-bold text-primary">
                    Ghum (2,258 m)
                  </span>
                </div>
                <div className="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                  <div className="h-full bg-secondary w-4/5 rounded-full"></div>
                </div>
                <span className="font-label-sm text-label-sm text-secondary self-end">
                  88 km Corridor Synced
                </span>
              </div>
            </div>
          </div>

          {/* Monsoon Advisory Ribbon */}
          <div className="w-full rounded-xl bg-surface-container-lowest p-space-sm shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-tertiary text-[20px]">
                rainy
              </span>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-space-xs">
                <span className="font-label-md text-label-md font-bold text-on-surface">
                  Monsoon Advisory:
                </span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">
                  Active for Kurseong — Sukna section • On-device translation
                  engines fully synced
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-xs shrink-0 self-end md:self-auto">
              <span className="font-label-sm text-label-sm text-secondary font-semibold">
                Local Node: GHUM-STN-02
              </span>
              <span className="material-symbols-outlined text-secondary text-[16px]">
                cloud_done
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Operational Portals Section */}
      <div className="py-space-xl flex flex-col gap-space-lg">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-xs">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-bold">
              Select Operation Mode
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary font-bold">
              Operational Portals
            </h2>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant">
            Optimised for high-visibility station monitors and gloved mountain
            field staff.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
          {/* Card 1: Staff Mode */}
          <div className="group relative bg-surface-container-lowest rounded-2xl p-space-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed/20 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-space-xs py-1 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm font-semibold">
                  <span className="material-symbols-outlined text-[14px]">
                    shield_person
                  </span>
                  Authorised Personnel
                </span>
                <span className="font-label-sm text-label-sm text-outline font-mono">
                  STAFF-DESK-v1
                </span>
              </div>

              <div className="flex items-center gap-space-md">
                <div className="w-14 h-14 rounded-xl bg-primary-container flex items-center justify-center shrink-0 shadow-sm text-on-primary">
                  <span className="material-symbols-outlined text-[32px]">
                    campaign
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-primary font-bold">
                    Staff Mode
                  </h3>
                  <p className="font-label-sm text-label-sm text-secondary font-semibold">
                    Station Masters &amp; Train Dispatchers
                  </p>
                </div>
              </div>

              <p className="font-body-md text-body-md text-on-surface-variant">
                Convert raw disruption events, mudslip alerts, and locomotive
                delays into simplified multilingual public advice in under 15
                seconds.
              </p>

              <div className="p-space-sm rounded-xl bg-surface-container flex flex-col gap-2">
                <div className="flex items-center gap-space-xs text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    bolt
                  </span>
                  <span className="font-body-sm text-body-sm font-semibold">
                    3-Step Rapid Disruption Input
                  </span>
                </div>
                <div className="flex items-center gap-space-xs text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    g_translate
                  </span>
                  <span className="font-body-sm text-body-sm font-semibold">
                    Offline Local Engine (Hindi, Nepali, Bengali)
                  </span>
                </div>
                <div className="flex items-center gap-space-xs text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    qr_code_2
                  </span>
                  <span className="font-body-sm text-body-sm font-semibold">
                    Dynamic Station QR &amp; Audio PA Broadcast
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate("staff-mode")}
              className="mt-space-lg w-full h-12 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg flex items-center justify-center gap-space-xs hover:bg-primary-container transition-colors shadow-md group-hover:bg-primary-container"
              type="button"
            >
              <span>Launch Staff Mode</span>
              <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>

          {/* Card 2: Passenger Mode */}
          <div className="group relative bg-surface-container-lowest rounded-2xl p-space-lg shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary-fixed/20 rounded-bl-full pointer-events-none transition-transform group-hover:scale-110"></div>
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1 px-space-xs py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm font-semibold">
                  <span className="material-symbols-outlined text-[14px]">
                    sensors
                  </span>
                  Live Station Kiosk
                </span>
                <span className="font-label-sm text-label-sm text-outline font-mono">
                  PUBLIC-KIOSK-04
                </span>
              </div>

              <div className="flex items-center gap-space-md">
                <div className="w-14 h-14 rounded-xl bg-tertiary-container flex items-center justify-center shrink-0 shadow-sm text-on-tertiary">
                  <span className="material-symbols-outlined text-[32px]">
                    volume_up
                  </span>
                </div>
                <div>
                  <h3 className="font-headline-md text-headline-md text-tertiary-container font-bold">
                    Passenger Mode
                  </h3>
                  <p className="font-label-sm text-label-sm text-secondary font-semibold">
                    Platform &amp; Waiting Hall Display
                  </p>
                </div>
              </div>

              <p className="font-body-md text-body-md text-on-surface-variant">
                High-contrast, elderly-accessible public screen with
                simplified real-time guidance, mountain relief measures, and
                instant phone QR take-away.
              </p>

              <div className="p-space-sm rounded-xl bg-surface-container flex flex-col gap-2">
                <div className="flex items-center gap-space-xs text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    translate
                  </span>
                  <span className="font-body-sm text-body-sm font-semibold">
                    4 Languages: हिंदी, বাংলা, नेपाली, English
                  </span>
                </div>
                <div className="flex items-center gap-space-xs text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    spatial_audio_off
                  </span>
                  <span className="font-body-sm text-body-sm font-semibold">
                    Large 1-Tap Mountain Audio Voice-over
                  </span>
                </div>
                <div className="flex items-center gap-space-xs text-on-surface">
                  <span className="material-symbols-outlined text-secondary text-[18px]">
                    phonelink_ring
                  </span>
                  <span className="font-body-sm text-body-sm font-semibold">
                    Zero-Data Offline QR Transfer to Phone
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => onNavigate("passenger-tablet-display")}
              className="mt-space-lg w-full h-12 rounded-xl bg-tertiary-container text-on-tertiary font-label-lg text-label-lg flex items-center justify-center gap-space-xs hover:bg-tertiary transition-colors shadow-md group-hover:bg-tertiary"
              type="button"
            >
              <span>Open Passenger Display</span>
              <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
