import React from 'react';

const JsxBasicsExample = () => {
  const name = 'React Learner';
  const user = {
    firstName: 'John',
    lastName: 'Doe'
  };

  function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }

  return (
    <div>
      <h3>Hello, {formatName(user)}!</h3>
      <p>This is a simple example of JSX.</p>
      <p>You can embed JavaScript expressions directly in your JSX, like this: 2 + 2 = {2 + 2}</p>
    </div>
  );
};

export default JsxBasicsExample;
