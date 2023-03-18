import { useState, useEffect } from 'react';

export const App: React.FC = () => {
  const [pressedKey, setPressedKey] = useState<string | null>(null);

  useEffect(() => {
    const handleDocumentKeyUp = (event: KeyboardEvent) => {
      setPressedKey(event.key);
    };

    document.addEventListener('keyup', handleDocumentKeyUp);

    return () => {
      document.removeEventListener('keyup', handleDocumentKeyUp);
    };
  }, []);

  return (
    <div className="App">
      <p className="App__message">
        {pressedKey
          ? `The last pressed key is [${pressedKey}]`
          : 'Nothing was pressed yet'}
      </p>
    </div>
  );
};
