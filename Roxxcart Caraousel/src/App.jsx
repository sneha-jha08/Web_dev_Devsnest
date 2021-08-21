// import logo from './logo.svg';
import "./App.css";
import Carousel from "react-bootstrap/Carousel";
function App() {
  return (
    <div className="App">
      <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="image"
            src="images/banner1.jpeg"
            alt="First slide"
          />
          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image"
            src="images/banner2.jpeg"
            alt="Second slide"
          />

         
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image"
            src="images/banner3.jpg"
            alt="Third slide"
          />

          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image"
            src="images/banner4.jpg"
            alt="Third slide"
          />

          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image"
            src="images/banner5.jpg"
            alt="Third slide"
          />

          
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image"
            src="images/banner6.jpeg"
            alt="Third slide"
          />

          
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default App;
