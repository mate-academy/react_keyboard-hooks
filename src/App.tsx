import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [lastKey, setLastKey] = useState<string | null>('');

  const handleKeyUp = (event: KeyboardEvent) => {
    setLastKey(event.key);
  };

  useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <>
      <div className="App">
        <input type="text" />

        <p className="App__message">
          {
            lastKey === ''
              ? 'Nothing was presset yet.'
              : `The last pressed key is [${lastKey}]`
          }
        </p>
      </div>
    </>

  );
};
