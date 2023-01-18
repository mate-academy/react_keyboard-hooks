import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [keyValue, SetKeyValue] = useState('');

  const handleKeyUp = (e: KeyboardEvent) => {
    SetKeyValue(e.key);
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {keyValue
          ? `The last pressed key is [${keyValue}]`
          : 'Nothing was pressed yet'}
      </p>
    </div>
  );
};
