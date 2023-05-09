import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = useState('');

  useEffect(() => {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      setKey(event.key);
    });
  });

  return (
    <div className="App">
      <input type="text" />
      <p className="App__message">
        {key
          ? `The last pressed key is [${key}]`
          : 'Nothing was pressed yet'}
      </p>
    </div>
  );
};
