import BackgroundLayer from "@/components/BackgroundLayer";
import GrainOverlay from "@/components/GrainOverlay";
import AtmosphereFX from "@/components/AtmosphereFX";
import ParallaxController from "@/components/ParallaxController";
import DayPhaseController from "@/components/DayPhaseController";
import TopBar from "@/components/TopBar";
import Player from "@/components/Player";

export default function Home() {
  return (
    <main className="relative z-0 flex min-h-dvh flex-1 flex-col items-center justify-between overflow-hidden">
      <DayPhaseController />
      <ParallaxController />
      <BackgroundLayer />
      <GrainOverlay />
      <AtmosphereFX />
      <TopBar />
      <Player />
    </main>
  );
}
