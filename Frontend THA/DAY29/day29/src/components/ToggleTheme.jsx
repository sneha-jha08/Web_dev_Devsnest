import { useSelector,useDispatch } from "react-redux";
import
const ToggleTheme = () => {
  const theme = useSelector((state) => state.theme);
const dispatch=useDispatch();
  return (
    <div className="toggle-theme">
      <button className={theme?"btn btn-light":"btn btn-dark"} onClick={()=>{ }}>{theme ? "Dark" : "Light "}</button>
    </div>
  );
};

export default ToggleTheme;
