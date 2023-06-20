import { HurdleContent } from "./screen/HurdleContent";
import { HurdleWrapper } from "./store/HurdleWrapper";
import { InterpWrapper } from "./store/InterpState";
function HurdleRun() {
  return (
    <HurdleWrapper>
      <InterpWrapper>
      <div className="MiniPlayer">
          <HurdleContent />
      </div>
      </InterpWrapper>
    </HurdleWrapper>
  );
}
export { HurdleRun };
