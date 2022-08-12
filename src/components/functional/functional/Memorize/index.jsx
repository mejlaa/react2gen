import { useCallback, useEffect, useState } from 'react';

const Memorize = props => {
  const [text, setText] = useState();

  const myCallback = useCallback(
    e => {
      setText(e.target.value);
      console.log(e.target.value);
    },
    [setText]
  );

  useEffect(() => {
    console.log('here');
  });

  return (
    <div>
      <MyInput onChange={myCallback} />
      <MyInput onChange={myCallback} />
      <MyInput onChange={myCallback} />
    </div>
  );
};

const MyInput = props => {
  return (
    <div>
      <label htmlFor="">My text</label>
      <input type="text" onChange={props.onChange} />
    </div>
  );
};

export default Memorize;
