import "./Button.css"
import React, { useState } from "react";
function Button(props) {
  let [count, setCount] = useState(0);

  function increment() {
    let newCount = count + 1;
    setCount(newCount);
    console.log(props.id+" "+(newCount));
  }return(
  <button onClick={increment}>{count}</button>)
}

export default Button;
