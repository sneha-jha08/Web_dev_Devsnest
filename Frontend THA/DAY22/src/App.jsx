import { useState, useEffect } from "react";
import Templates from "./components/Templates";
import Meme from "./components/Meme";
import "./App.css";

function App() {
  const [templates, setTemplates] = useState([]); // template meinn data store hoga nd setTemplate mein se value update hogi
  const [meme, setMeme] = useState(null);
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        setTemplates(data.data.memes);
        // console.log(data.data.memes);
      });
  }, []);
  return (
    <div className="App">
      <h2>Meme Generator</h2>
      {meme === null ? <Templates templates={templates} setMeme={setMeme} /> : (<Meme meme={meme} setMeme={setMeme}/>)}
{/* agar meme === null toh templates render honge vrna nahi */}
    </div>
  );
}

export default App;
