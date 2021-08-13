const updatePlace = (place) => {
  return {
    type: "UPDATE_PLACE",
    payload: place,
  };
};

const updatePlaceData = (place) => {
  return (dispatch) => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=8ac32be1a8dd4333a05125042211108&q=${place}&aqi=no`
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        dispatch({
          type: "UPDATE_PLACE_DATA",
          payload: data,
        });
      });
  };
};

const toggleTheme=()=>{

return{ type:"TOGGLE_THEME"} }

export { updatePlace, updatePlaceData ,toggleTheme};
