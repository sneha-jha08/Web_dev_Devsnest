import "./App.css";
import Row1 from "./components/Row1";
import Row2 from "./components/Row2";
function App() {
  return (
    <div className="App">
      <div className="main_box">
        <Row1/>
        <Row2/>
        <Row1/>
        <Row2/>
        <Row1/>
        <Row2/>
        <Row1/>
        <Row2/>
      </div>
    </div>
  );
}

export default App;
