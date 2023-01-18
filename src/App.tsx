import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [enteredKey, setEnteredKey] = useState('');

  const keyEntered = (event: KeyboardEvent) => {
    setEnteredKey(() => event.key);
  };

  useEffect(() => {
    document.addEventListener('keyup', keyEntered);
  });

  return (
    <div className="App">
      <p className="App__message">
        {enteredKey
          ? `The last pressed key is [${enteredKey}]`
          : 'Nothing was pressed yet'}
      </p>
    </div>
  );
};
