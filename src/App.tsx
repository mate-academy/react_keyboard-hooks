import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState({ pressedKey: '' });

  useEffect(() => {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      setPressedKey({ pressedKey: event.key });
    });
  }, [pressedKey.pressedKey]);

  return (
    <div className="App">
      {pressedKey.pressedKey ? (
        <p className="App__message">
          The last pressed key is
          {' '}
          {`[${pressedKey.pressedKey}]`}
        </p>
      )
        : (
          <p className="App__message">Nothing was pressed yet</p>
        )}
    </div>
  );
};
