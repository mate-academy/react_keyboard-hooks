import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [usedKeyboardKey, setUsedKeyboardKey] = useState('');

  const detectKeyDown = (event: KeyboardEvent) => {
    setUsedKeyboardKey(event.key);
  };

  useEffect(() => {
    document.addEventListener('keyup', detectKeyDown);

    return () => document.removeEventListener('keyup', detectKeyDown);
  }, [usedKeyboardKey]);

  return (
    <div className="App">
      {/* Keep this input for tests */}
      <input type="text" />
      {usedKeyboardKey ? (
        <p className="App__message">
          The last pressed key is [
          {usedKeyboardKey}
          ]
        </p>
      ) : (
        <p className="App__message">Nothing was pressed yet</p>
      )}
    </div>
  );
};
