import { useSelector, useDispatch } from "react-redux";
import { updatePlace, updatePlaceData } from "../actions";

const Form = () => {
  const place = useSelector((state) => state.place);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 form">
          <input
            type="text"
            placeholder="Enter city name"
            value={place}
            onChange={(e) => {
              dispatch(updatePlace(e.target.value));
            }}
          />
          <button
            className="btn btn-primary"
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
