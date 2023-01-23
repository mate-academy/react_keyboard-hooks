import { useState, useEffect } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = useState('');

  const pressedKey = (event: KeyboardEvent) => {
    setKey(() => event.key);
  };

  useEffect(() => {
    document.addEventListener('keyup', pressedKey);

    return () => document.removeEventListener('keyup', pressedKey);
  }, []);

  return (
    <div className="App">
      <input type="text" />

      <p className="App__message">
        {key ? `The last pressed key is [${key}]` : 'Nothing was pressed yet'}
      </p>
    </div>
  );
};
