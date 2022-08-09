import React, { useState } from 'react';

export const MyContext = React.createContext();

const CounterContext = props => {
  const [counter, setCounter] = useState(0);

  return (
    <MyContext.Provider value={{ counter, setCounter }}>
      {props.children}
    </MyContext.Provider>
  );
};

export default CounterContext;
