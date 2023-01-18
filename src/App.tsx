import { FC, useEffect, useState } from 'react';

export const App: FC = () => {
  const [key, setKey] = useState('');

  useEffect(() => {
    document.addEventListener('keyup', (e) => {
      setKey(e.key);
    });
  }, []);

  return (
    <div className="App">
      {
        key
          ? <p className="App__message">{`The last pressed key is [${key}]`}</p>
          : <p className="App__message">Nothing was pressed yet</p>
      }
    </div>
  );
};
