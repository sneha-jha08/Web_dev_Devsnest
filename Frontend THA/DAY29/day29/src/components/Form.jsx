import { useSelector, useDispatch } from "react-redux";
import { updatePlace, updatePlaceData } from "../actions";

const Form = () => {
  const place = useSelector((state) => state.place);
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row">
        <div className={theme ? "col-12 form dark" : "col-12 form"}>
          <input
            type="text"
            placeholder="Enter city name"
            required
            value={place}
            onChange={(e) => {
              dispatch(updatePlace(e.target.value));
            }}
          />
          <button
            className={theme ? "btn btn-light" : "btn btn-dark"}
            onClick={() => {
              dispatch(updatePlaceData(place));
            }}
          >
            Submit
          </button>
          {/* {place} */}
        </div>
      </div>
    </div>
  );
};

export default Form;
