import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState('');

  const keyupHandler = (event: KeyboardEvent) => setPressedKey(event.key);

  useEffect(() => {
    document.addEventListener('keyup', keyupHandler);

    return () => document.removeEventListener('keyup', keyupHandler);
  }, []);

  return (
    <div className="App">
      {/* Keep this input for tests */}
      <input type="text" />

      {
        pressedKey
          ? (<p className="App__message">{`The last pressed key is [${pressedKey}]`}</p>)
          : (<p className="App__message">Nothing was pressed yet</p>)
      }
    </div>
  );
};
