import React, { useEffect, useState } from 'react';


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
  }, []);

  return (
    <div className="App">
      <p
        className="App__message"
      >
        {pressedKey ? (
          `The last pressed key is [${pressedKey}]`
        ) : (
          'Nothing was pressed yet'
        )}
      </p>
    </div>
  );
};
