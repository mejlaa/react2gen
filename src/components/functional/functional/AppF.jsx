import React from "react";

function AppF(props) {
  return (
    <div>
      <p>Hello {props.name}</p>
      {props.children}
    </div>
  );
}

export default AppF;
