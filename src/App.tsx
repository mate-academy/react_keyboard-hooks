import { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [keyPressed, setKeyPressed] = useState('');

  useEffect(() => {
    document.addEventListener('keyup', (event: KeyboardEvent) => {
      setKeyPressed(event.key);
    });
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
