import { HurdleContent } from "./screen/HurdleContent";
import { HurdleWrapper } from "./store/HurdleWrapper";
function HurdleRun() {
  return (
    <HurdleWrapper>
      <div className="MiniPlayer">
          <HurdleContent />
      </div>
    </HurdleWrapper>
  );
}
export { HurdleRun };
