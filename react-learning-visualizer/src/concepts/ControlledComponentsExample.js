import React, { useState } from 'react';

const ControlledComponentsExample = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    alert('A name was submitted: ' + inputValue);
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h3>Current input value: {inputValue}</h3>
      <hr />
      <p>
        In a controlled component, form data is handled by the component's state. The state is the single source of truth.
      </p>
    </div>
  );
};

export default ControlledComponentsExample;
