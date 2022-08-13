import React, { useEffect, useState, useCallback, memo, useMemo } from 'react';

const Memorize = props => {
  const [text, setText] = useState(1);

  const array = useMemo(() => {
    return [
      { id: 'sdf' },
      { id: '1df' },
      { id: '2df' },
      { id: '3df' },
      { id: '4df' },
      { id: '5df' },
      { id: '6sf' },
    ];
  }, []);

  const computedArray = useMemo(() => {
    array.filter(item => {
      return item.id.includes('s');
    });
  }, []);

  return (
    <div>
      <p onClick={() => setText(text + 1)}>{text}</p>
      {array.map(item => {
        return <p id={item.id}>{item.id}</p>;
      })}
    </div>
  );
};

const MyText = React.memo(props => {
  return <p>Nesto</p>;
});

const List = React.memo(props => {
  return [1, 2, 3, 4].map(item => {
    return (
      <div>
        <span>{item}</span>
        <button onClick={props.onClick}>{item}</button>
      </div>
    );
  });
});

// const Memorize = props => {
//   const [text, setText] = useState(1);

//   const change = useCallback(e => {
//     console.log('first');
//     setText(e.target.innerText);
//   }, []);

//   return (
//     <div>
//       <p onClick={() => setText(text + 1)}>{text}</p>
//       <List onClick={change} />
//     </div>
//   );
// };

// const Memorize = props => {
//   const [text, setText] = useState(1);

//   const change = useCallback(
//     e => {
//       setText(e.target.value);
//       console.log(text);
//     },
//     [text]
//   );

//   return (
//     <div>
//       <p>{text}</p>
//       <MyInput onChange={change} />
//       <MyInput onChange={change} />
//       <MyInput onChange={change} />
//       <MyInput onChange={change} />
//     </div>
//   );
// };

// const Memorize = props => {
//   const [text, setText] = useState(1);

//   // const change = useCallback(e => {
//   //   setText(e.target.value);
//   //   console.log(text);
//   // }, []);

//   const click = useCallback(() => {
//     console.log('nesto');
//   }, []);

//   useEffect(() => {
//     click();
//   }, [click]);

//   return (
//     <div>
//       <p>{text}</p>
//       <MyInput onChange={click} />
//     </div>
//   );
// };

// const Memorize = props => {
//   const [text, setText] = useState(1);

//   // const change = useCallback(e => {
//   //   setText(e.target.value);
//   //   console.log(text);
//   // }, []);

//   const change = useCallback(
//     e => {
//       setText(e.target.value);
//       console.log(text);
//     },
//     [text]
//   );

//   return (
//     <div>
//       <p>{text}</p>
//       <MyInput onChange={change} />
//       <MyInput onChange={change} />
//       <MyInput onChange={change} />
//       <MyInput onChange={change} />
//     </div>
//   );
// };

// const MyInput = props => {
//   return (
//     <div>
//       <span>NEsto</span>
//       <input type="text" onChange={props.change} />
//     </div>
//   );
// };

export default Memorize;
