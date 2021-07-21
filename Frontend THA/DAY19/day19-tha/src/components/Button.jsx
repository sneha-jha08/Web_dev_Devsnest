//since we cant update the values direectly to the DOM so we use hooks in order to do so
//over here were using useState to update the values


import "./Button.css"
import React, { useState } from "react";
function Button(props) {
  let [count, setCount] = useState(0);// deconstructing the arrays and assigning  count =0;

  function increment() {// made a new function to increment the values
    let newCount = count + 1;
    setCount(newCount);//setting the value of count= newcount
    console.log(props.id+" "+(newCount));
  }return(
  <button onClick={increment}>{count}</button>)//shows updated value of count ie newCount
}

export default Button;
