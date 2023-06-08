import React, { useState, useEffect } from 'react';

export const App: React.FC = () => {
  const [key, setKey] = useState('');
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      setKey(event.key);
    };

    document.addEventListener('keyup', handleKeyUp);

    return () => {
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="App">

      {/* Keep this input for tests */}
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
      />

      <p className="App__message">
        {key === '' ? 'Nothing was pressed yet'
          : `The last pressed key is [${key}]`}
      </p>
    </div>
  );
};
