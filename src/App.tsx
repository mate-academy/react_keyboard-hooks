import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = useState('');
  const handleKey = (event: KeyboardEvent) => {
    setKey(event.key);
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKey);

    return () => document.removeEventListener('keyup', handleKey);
  });

  return (
    <div className="App">
      {/* Keep this input for tests */}
      <input
        type="text"

      />

      {
        key
          ? <p className="App__message">{`The last pressed key is [${key}]`}</p>

          : <p className="App__message">Nothing was pressed yet</p>
      }

    </div>
  );
};
