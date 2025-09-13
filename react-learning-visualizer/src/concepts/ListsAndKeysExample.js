import React from 'react';

const NumberList = ({ numbers }) => {
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
};

const ListsAndKeysExample = () => {
  const numbers = [1, 2, 3, 4, 5];
  const fruits = ['apple', 'banana', 'orange'];

  return (
    <div>
      <h3>Rendering a list of numbers:</h3>
      <NumberList numbers={numbers} />
      <h3>Rendering a list of strings:</h3>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>
      <hr />
      <p>
        Keys help React identify which items have changed, are added, or are
        removed. Keys should be stable, predictable, and unique.
      </p>
    </div>
  );
};

export default ListsAndKeysExample;
