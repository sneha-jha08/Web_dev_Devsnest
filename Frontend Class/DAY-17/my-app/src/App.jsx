// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Card from './components/Card';

function App() {
    // console.log(props);
   
//     const title="page title";
//     const paragraph="page";
//     const page={
// title:"Page Title",
// paragraph:"page "
// // };
// let a =10;
// let b=20;

  return (
    <div className="App" >
        <Card img ="img/wallpaper1.jpg" title=" wallpaper1"/>
        <Card img ="/img/wallpaper2.jpg" title=" wallpaper2"/>
        <Card img ="/img/wallpaper3.jpg" title=" wallpaper3"/>
        <Card img ="/img/wallpaper4.jpg" title=" wallpaper4"/>
        <Card img ="/img/wallpaper5.jpg" title=" wallpaper5"/>
    </div>);
  
};

export default App;
