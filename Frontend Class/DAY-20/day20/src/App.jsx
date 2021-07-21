import { useEffect, useState } from "react";
import "./App.css";
//todo mein hum actual input the values ko print kara rhe h
//todos mein mapped array h
//values mein input ke values ko store kr rhe h
//setTodos value store krta h todos ki ek array mein
//setValues values ak array banata h
//newTodods will store the todos after filtering out the element  that has been deleted.
//el is the element that will be deleted,

const Todo = ({ todo, todos, setTodos, index }) => {
  return (
    <div>
      <h2 className="todo">{todo}</h2>
      <button
        onClick={() => {
          console.log("Deleted = ", todo);
          console.log(index);
          var newTodos = todos.filter((el, i) => i !== index);
          console.log(newTodos);
          setTodos( newTodos );
        }}
      >
        {" "}
        Delete
      </button>
    </div>
  );
};

function App(props) {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([
    "Complete Tha Day18",
    "Complete Tha Day19",
  ]); //assigned a value to todo
 useEffect(()=>{setTodos([])},[])
  return (
    <div className="App">
      <input
        type="text"
        onChange={(e) => {
          setValue(e.target.value);
          //   console.log(value);
          // value change hone pe vo log ho jaayega
        }}
        value={value}
      />
      <button
        onClick={() => {
          //   console.log(value); //onclicking the button the value in the input box will be logged
          setTodos([...todos, value]);

          setValue(""); //and the input box's value will be set to ""
        }}
      >
        Add
      </button>
      {todos.map((todo, index) => (
        <Todo
          key={index}
          todo={todo}
          todos={todos}
          setTodos={setTodos}
          index={index}
        />
      ))}
      {/* key is used since were rendering the same element many times hence well need to distinguish between them and for that were using keys as itll provide different index to each element  */}{" "}
      {/* map makes a new array and over here itll make an array i.e todos array with different index and todo list as an element */}
    </div>
  );
}

export default App;
