import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions";
const AddTodo = () => {
  const [item, setItem] = useState("");
  const dispatch = useDispatch("");
  return (
    <div>
      <input
        type="text"
        value={item}
        placeholder="Add a Todo..."
        onChange={(e) => {
          setItem(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          dispatch(addItem({ title: item, done: false }));
          setItem("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
