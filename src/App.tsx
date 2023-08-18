import React, { useState, useEffect } from 'react';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState('');

  const handleKey = (event: KeyboardEvent) => {
    setPressedKey(event.key);
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKey);

    return () => document.removeEventListener('keyup', handleKey);
  }, []);

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
