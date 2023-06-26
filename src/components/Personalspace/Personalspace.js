import { useState, useContext } from "react";
import { Points } from "../../store/Points";
import { Keystroke } from "../../controls/Keystroke";
import { PresonalWrapper } from "./store/PersonalWrapper";
import { PersonalScreen } from "./PersonalScreen";

function PersonalSpace() {
  return (
    <PresonalWrapper>
      <PersonalScreen/>
    </PresonalWrapper>
  );
}
export { PersonalSpace };
