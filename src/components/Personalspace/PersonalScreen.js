import { PersonalCell } from "./PersonalCell";
import { usePersonalStore } from "./store/PersonalWrapper";

function PersonalScreen() {
  const personalCtx = usePersonalStore();

  return (
    <table>
      {personalCtx.screenCells.map((row, rowIndex) => {
        return (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => {
              return (
                <td key={cellIndex}>
                  <PersonalCell img={cell} />
                  {console.log("what the num in cell?!",cell)}
                </td>
              );
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
