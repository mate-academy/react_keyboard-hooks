import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [keyInput, setKeyInput] = useState('');

  const handleKey = (event: KeyboardEvent) => {
    setKeyInput(event.key);
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKey);

    return () => document.removeEventListener('keyup', handleKey);
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {keyInput
          ? `The last pressed key is [${keyInput}]`
          : 'Nothing was pressed yet'}
      </p>
    </div>
  );
};
