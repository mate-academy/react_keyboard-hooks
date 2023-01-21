import React, { useState, useEffect } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = useState('');

  const handleKeyEvent = (event: KeyboardEvent) => {
    setKey(event.key);

    if (event.key === ' ') {
      setKey('Space');
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyEvent);

    return () => {
      document.addEventListener('keyup', handleKeyEvent);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {key
          ? `The last pressed key is [${key}]`
          : 'Nothing was pressed yet'}
      </p>
    </div>
  );
};
