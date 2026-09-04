import { useState, useEffect } from "react";
import { Header, type TabKey } from "./components/Header";
import { HomeView } from "./pages/HomeView";
import { StaffModeView } from "./pages/StaffModeView";
import { PassengerTabletView } from "./pages/PassengerTabletView";
import { PassengerMobileQrView } from "./pages/PassengerMobileQrView";
import { ComponentsEdgeStatesView } from "./pages/ComponentsEdgeStatesView";
import { processDisruptionInput } from "./services/disruptionService";
import type { ResolvedDisruption } from "./types/disruption";

export function App() {
  const [activeTab, setActiveTab] = useState<TabKey>("home");
  const [activeDisruption, setActiveDisruption] = useState<ResolvedDisruption | null>(null);

  // Initialize activeDisruption with default initial disruption on mount
  useEffect(() => {
    async function initDefaultDisruption() {
      const defaultResult = await processDisruptionInput(
        "Toy Train #52541 to Darjeeling is delayed by 45 minutes due to heavy monsoon rain and track clearance near Batasia Loop.",
        "en"
      );
      if (defaultResult) {
        setActiveDisruption(defaultResult);
      }
    }
    initDefaultDisruption();
  }, []);

  const handleDisruptionResolved = (result: ResolvedDisruption) => {
    setActiveDisruption(result);
  };

  return (
    <div className="min-h-screen bg-surface font-body-md text-body-md text-on-surface flex flex-col">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="w-full pt-20 bg-surface min-h-[calc(100vh-140px)] flex-1">
        <div className="max-w-7xl mx-auto px-margin-mobile lg:px-margin-desktop py-space-lg">
          {activeTab === "home" && <HomeView onNavigate={setActiveTab} />}
          {activeTab === "staff-mode" && (
            <StaffModeView
              onDisruptionResolved={handleDisruptionResolved}
              onNavigateToPassenger={() => setActiveTab("passenger-tablet-display")}
              activeDisruption={activeDisruption}
            />
          )}
          {activeTab === "passenger-tablet-display" && (
            <PassengerTabletView activeDisruption={activeDisruption} />
          )}
          {activeTab === "passenger-mobile-qr-view" && (
            <PassengerMobileQrView activeDisruption={activeDisruption} />
          )}
          {activeTab === "components-edge-states" && (
            <ComponentsEdgeStatesView />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;