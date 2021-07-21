import React,{useState} from 'react';
import Card from './components/Card'
import './App.css';

function App() {
  
  const menuItems = [
  ['Pizza', 120],
  ['Burger', 100],
  ['Brownies', 80],
  ['Muffins', 46],
  ['Lasagna', 150],
  ['Pasta', 100],
  ['Chocolate', 35],
];

const [menu, setMenu] = useState(menuItems);

  return (
    <div className="container">
      <Card menu={menu} setCards={setMenu}/>
    </div>
  );
}

export default App;
