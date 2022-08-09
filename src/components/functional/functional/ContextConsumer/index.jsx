import { useContext } from 'react';
import { MyContext } from '../SimpleContext';

const ContextConsumer = props => {
  const state = useContext(MyContext);

  console.log(state.text, state.setText);

  return (
    <div>
      <button onClick={() => state.setText(props.name)}>Click</button>
      <p>{state.text}</p>
      {props.children}
    </div>
  );
};

export default ContextConsumer;
