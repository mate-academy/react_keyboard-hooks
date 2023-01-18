import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = useState('');

  const handleKey = (event: KeyboardEvent) => {
    setKey(event.key);
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKey);

    return () => document.removeEventListener('keyup', handleKey);
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
