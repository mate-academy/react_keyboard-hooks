import React, { useEffect, useState } from "react";

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState("");

  const keyBoardHandler = (event: KeyboardEvent) => {
    setPressedKey(event.key);
  };

  useEffect(() => {
    document.addEventListener("keyup", keyBoardHandler);

    return () => document.removeEventListener("keyup", keyBoardHandler);
  }, [pressedKey]);
  return (
    <div className="App">
      <input type="text" />

      {pressedKey ? (
        <p className="App__message">{`The last pressed key is [${pressedKey}]`}</p>
      ) : (
        <p className="App__message">Nothing was pressed yet</p>
      )}
    </div>
  );
};
