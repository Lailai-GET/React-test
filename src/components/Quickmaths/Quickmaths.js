import { QuickMathsWrapper } from "./store/QuickMathsWrapper";
import { QuestionRow } from "./screen/QuestionRow";
import { AnswerRow } from "./screen/AnswerRow";
import { TimerRow } from "./screen/TimerRow";

function QuickMaths() {
  return (
    <QuickMathsWrapper>
      <div className="MiniPlayer">
        <table>
          <QuestionRow />
          <AnswerRow />
          <TimerRow />
        </table>
      </div>
    </QuickMathsWrapper>
  );
}
export { QuickMaths };
