import React, { useRef } from 'react';

const UseRefExample = () => {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
    alert(`Input value: ${inputEl.current.value}`);
  };

  return (
    <div>
      <h3>useRef Hook Example</h3>
      <p>
        Click the button to focus the input field and show its value.
      </p>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
};

export default UseRefExample;
