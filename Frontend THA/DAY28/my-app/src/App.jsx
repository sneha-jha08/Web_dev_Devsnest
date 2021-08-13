import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

function App() {
  const [place, setPlace] = useState("");
  const [placeData, setPlaceData] = useState({});

  const updatePlaceData = () => {
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=8ac32be1a8dd4333a05125042211108&q=${place}&aqi=no`
    )
      .then((res) => res.json())
      .then((data) => {
        setPlaceData(data);
      });
  };

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 form">
            <input
              type="text"
              placeholder="Enter city name"
              value={place}
              onChange={(e) => {
                setPlace(e.target.value);
              }}
            />
            <button className="btn btn-primary" onClick={updatePlaceData}>
              Submit
            </button>
          </div>
          <div className="offset-md-4 col-4 offset-md-4 weather">
            <div className="card">
              {placeData.location ? (
                <div className="data">
                  <img src={placeData.current.condition.icon} alt="" />
                  <div className="place">
                    <h2>{placeData.location.name}</h2>
                  </div>
                  <div className="temp">
                    <h2>{placeData.current.temp_c}℃</h2>
                  </div>
                  <div className="container">
                    <div className="row whp">
                      <div className="col-4">
                        <div className="title  ">
                          Wind Now
                          <div className="data">
                            {placeData.current.wind_kph}
                            <span className="unit"> Kmph</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="title">
                          Humidity
                          <div className="data">
                            {placeData.current.humidity}
                            <span className="unit">%</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="title">
                          Feels Like
                          <div className="data">
                            {placeData.current.feelslike_c}
                            <span className="unit">℃</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <h2> place not found</h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
