import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = useState('');

  useEffect(() => {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      setKey(event.key);
    });
  }, []);

  return (
    <div className="App">
      {/* Keep this input for tests */}
      <input type="text" />

      {key === '' ? (
        <p className="App__message">Nothing was pressed yet</p>
      ) : (
        <p className="App__message">
          The last pressed key is [
          {key}
          ]
        </p>
      )}
    </div>
  );
};
