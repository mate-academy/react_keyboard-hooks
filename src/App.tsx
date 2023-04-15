import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [pressedKey, changingKey] = useState('');

  const detectKeyDown = (e: KeyboardEvent) => {
    changingKey(e.key);
  };

  useEffect(() => {
    document.addEventListener('keyup', detectKeyDown, true);
  }, []);

  return (
    <div className="App">
      {/* Keep this input for tests */}
      <input type="text" />
      <p className="App__message">
        {pressedKey === ''
          ? 'Nothing was pressed yet'
          : `The last pressed key is [${pressedKey}]`}
      </p>
    </div>
  );
};
