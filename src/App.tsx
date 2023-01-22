import { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [keyPressed, setKeyPressed] = useState('');

  const keyUpHandler = (event: KeyboardEvent) => {
    setKeyPressed(event.key);
  };

  useEffect(() => {
    document.addEventListener('keyup', keyUpHandler);

    return () => document.removeEventListener('keyup', keyUpHandler);
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {keyPressed
          ? `The last pressed key is [${keyPressed}]`
          : 'Nothing was pressed yet' }
      </p>
    </div>
  );
};
