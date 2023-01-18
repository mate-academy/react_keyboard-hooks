import React, { FC, useEffect, useState } from 'react';

export const App: FC = () => {
  const [pressedKey, setPressedKey] = useState<string | null>(null);

  const handleKeyRelease = (event: KeyboardEvent) => setPressedKey(event.key);

  useEffect(() => {
    document.addEventListener('keyup', handleKeyRelease);

    return () => {
      document.removeEventListener('keyup', handleKeyRelease);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {pressedKey
          ? `The last pressed key is [${pressedKey}]`
          : 'Nothing was pressed yet'}
      </p>
    </div>
  );
};
