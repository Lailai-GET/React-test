import { useEffect, useRef } from "react";

export function Keystroke({ keyPress }) {
  const keyPressRef = useRef(keyPress);

  useEffect(() => {
    keyPressRef.current = keyPress;
  }, [keyPress]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (keyPressRef.current) keyPressRef.current(e);
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => document.removeEventListener("keydown", handleKeyPress);
  }, []);

  return null;
}
