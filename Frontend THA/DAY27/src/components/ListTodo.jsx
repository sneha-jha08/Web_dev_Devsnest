import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../actions";

const ListTodo = () => {
const dispatch=useDispatch();
  const todos = useSelector((state) => state.todo);
  return (
    <div>
      {todos.map((todo, index) => (
        <div>
          <h3 style={{ display: "inline-block" , textTransform:"capitalize"}}>{todo.title}</h3>
          <button onClick={()=>{dispatch(removeItem(index));}}>Delete</button>
        </div>
      ))}
    </div>
  );
};
export default ListTodo;
