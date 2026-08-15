import KolkataClock from "./KolkataClock";
import ChhathCountdown from "./ChhathCountdown";
import ShareAmbient from "./ShareAmbient";

export default function TopBar() {
  return (
    <div className="safe-pt safe-pl safe-pr relative z-30 flex w-full items-center justify-between">
      <KolkataClock />
      <div className="absolute left-1/2 -translate-x-1/2">
        <ChhathCountdown />
      </div>
      <ShareAmbient />
    </div>
  );
}
