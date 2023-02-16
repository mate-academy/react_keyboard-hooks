import React, { useEffect, useState } from "react";

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState("");

  const handlekeyBoard = (event: KeyboardEvent) => {
    setPressedKey(event.key);
  };

  useEffect(() => {
    document.addEventListener("keyup", handlekeyBoard);

    return () => document.removeEventListener("keyup", handlekeyBoard);
  }, [pressedKey]);

  return (
    <div className="App">
      <input type="text" />
      <p className="App__message">
        {pressedKey
          ? `The last pressed key is [${pressedKey}]`
          : "Nothing was pressed yet"}
      </p>
    </div>
  );
};
