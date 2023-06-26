import { PersonalCell } from "./PersonalCell";
import { usePersonalStore } from "./store/PersonalWrapper";

function PersonalScreen() {
  const personalCtx = usePersonalStore();

  return (
    <table>
      {personalCtx.screenCells[0].map((data) => {

          return (
            <tr>
              {personalCtx.screenCells[data].map((cell) => {
                return <td><PersonalCell img="1"/></td>;
              })}
            </tr>
          );
        
      })}
      {console.log(
        "what we working with",
        personalCtx.screenCells.map((data) => {
          return data;
        })
      )}
    </table>
  );
}

export { PersonalScreen };
