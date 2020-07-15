import React from 'react';

const Button = () => {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(() => count + 2)
  };

  return (
    <button onClick={handleClick}>
      count: {count}
    </button>
  )
};

export default Button;
