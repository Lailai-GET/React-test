import { HurdleCell } from "./HurdleCell";

function HurdleBottomRow() {
  return (
    <tr>
      <HurdleCell state="1" />
      <HurdleCell state="2" />
      <HurdleCell state="3" />
      <HurdleCell state="5" />
      <HurdleCell state="6" />
      <HurdleCell state="7" />
    </tr>
  );
}

export {HurdleBottomRow};