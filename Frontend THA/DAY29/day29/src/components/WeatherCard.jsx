import { useSelector } from "react-redux";


const WeatherCard = () => {
  const placeData = useSelector(state=>state.placeData);
  return (
    <div className="conatiner">
      <div className="row">
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
  );
};


export default WeatherCard;
