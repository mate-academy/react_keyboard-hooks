import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [selectedKey, setSelectedKey] = useState('');

  const handleKey = (event: KeyboardEvent) => {
    setSelectedKey(event.key);
  };

  useEffect(() => {
    document.addEventListener('keyup', handleKey);
  }, []);

  return (
    <div className="App">
      <p className="App__message">

        {selectedKey ? (
          `The last pressed key is [${selectedKey}]`
        ) : (
          'Nothing was pressed yet'
        )}
      </p>
    </div>
  );
};
