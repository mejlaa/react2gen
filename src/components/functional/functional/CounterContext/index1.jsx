import { useContext } from 'react';
import { MyContext } from '../CounterContext';

const ContextConsumerCounter = props => {
  const { counter, setCounter } = useContext(MyContext);

  //   console.log(state.counter, state.setCounter);

  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>{counter}</button>
      <p>{counter}</p>
      {props.children}
    </div>
  );
};

export default ContextConsumerCounter;
