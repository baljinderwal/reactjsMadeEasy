import React, { useState } from 'react';

const UserGreeting = () => <h2>Welcome back!</h2>;
const GuestGreeting = () => <h2>Please sign up.</h2>;

const ConditionalRenderingExample = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => {
    setIsLoggedIn(true);
  };

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? <UserGreeting /> : <GuestGreeting />}
      {isLoggedIn ? (
        <button onClick={handleLogoutClick}>Logout</button>
      ) : (
        <button onClick={handleLoginClick}>Login</button>
      )}
      <hr />
      <p>
        In this example, we are showing different greetings based on the
        'isLoggedIn' state. This is a common way to do conditional rendering in
        React.
      </p>
    </div>
  );
};

export default ConditionalRenderingExample;
