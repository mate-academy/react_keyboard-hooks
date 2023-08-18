import React, { useState, useEffect } from 'react';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState('');

  useEffect(() => {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      setPressedKey(event.key);
    });

    return () => {
      document.removeEventListener('keyup', (event: KeyboardEvent) => {
        setPressedKey(event.key);
      });
    };
  });

  return (
    <div className="App">
      {/* Keep this input for tests */}
      <input type="text" />

      <p className="App__message">
        {pressedKey
          ? `The last pressed key is [${pressedKey}]`
          : 'Nothing was pressed yet'}
      </p>
    </div>
  );
};

