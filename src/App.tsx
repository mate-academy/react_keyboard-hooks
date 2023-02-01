import React, { useEffect, useState } from 'react';

export const App: React.FC = () => {
  const [initialValue, setValue] = useState('');

  const keyPressed = (event: KeyboardEvent) => {
    setValue(() => event.key);
  };

  useEffect(() => {
    document.addEventListener('keyup', keyPressed);
  });

  return (
    <div className="App">
      {/* Keep this input for tests */}
      <input type="text" />
      <p className="App__message">
        {initialValue
          ? `The last pressed key is [${initialValue}]`
          : 'Nothing was pressed yet'}
      </p>
    </div>
  );
};
