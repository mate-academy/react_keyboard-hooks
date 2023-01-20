import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [keyPressed, setKeyPressed] = useState('');

  const detectKeyDown = (e: KeyboardEvent) => {
    setKeyPressed(e.key);
  };

  useEffect(() => {
    document.addEventListener('keyup', detectKeyDown);

    return () => document.removeEventListener('keyup', detectKeyDown);
  }, []);

  return (
    <div className="App">
      {/* Keep this input for tests */}
      <input type="text" />
      {
        keyPressed
          ? (
            <p className="App__message">
              The last pressed key is [
              {keyPressed}
              ]
            </p>
          )
          : <p className="App__message">Nothing was pressed yet</p>
      }
    </div>
  );
};
