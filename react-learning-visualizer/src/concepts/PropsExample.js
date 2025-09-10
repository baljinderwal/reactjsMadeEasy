import React from 'react';

const ChildComponent = (props) => {
  return (
    <div style={{ border: '1px solid blue', padding: '10px', margin: '10px' }}>
      <h4>Child Component</h4>
      <p>Received message: "{props.message}"</p>
      <p>Number: {props.number}</p>
    </div>
  );
};

const PropsExample = () => {
  return (
    <div>
      <h3>Props Example</h3>
      <p>
        This component passes data down to a child component using props.
      </p>
      <ChildComponent message="Hello from the parent!" number={42} />
      <ChildComponent message="Another message" number={100} />
    </div>
  );
};

export default PropsExample;
