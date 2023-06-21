import React, { useState, useEffect } from 'react';

export const App: React.FC = () => {
  const [key, setPressedKey] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setPressedKey(e.key);
    };

    document.addEventListener('keyup', handleKeyDown);

    return () => {
      document.removeEventListener('keyup', handleKeyDown);
    };
  }, []);

  return (
    <div className="App">
      {/* Keep this input for tests */}
      <input type="text" />

      <p className="App__message">
        {key === '' ? (
          'Nothing was pressed yet'
        ) : (
          `The last pressed key is [${key}]`
        )}
      </p>
    </div>
  );
};
