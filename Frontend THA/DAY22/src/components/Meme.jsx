import { useState } from "react";

const Meme = ({ meme, setMeme }) => {
  const [form, setForm] = useState({
    template_id: meme.id,
    username: "Sneha-jha08",
    password: "Sneha@0811",
    boxes: [],
  });

  const generateMeme = () => {
    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
    form.boxes.map((box, index) => {
      url += `&boxes[${index}][text]=${box.text}`;
    });
    fetch(url)
      .then(res => res.json())
      .then(data => {setMeme({ ...meme, url: data.data.url })});
    // console.log(form);
  };
  //   console.log(meme.url);
  return (
    <div className="meme">
      <img src={meme.url} alt="" />
      <div>
        {[...Array(meme.box_count)].map((_, index) => {
          return (
            <input
              key={index}
              type="text"
              placeholder={`Meme caption ${index + 1}`}
              onChange={(e) => {
                const newBoxes = form.boxes; //new boxes mein boxes ko store kr liya
                newBoxes[index] = { text: e.target.value }; //text ko e.target.value set kr diya
                setForm({ ...form, boxes: newBoxes }); //set krke update kr diya
              }}
            ></input>
          );
        })}
      </div>
      <div>
        <button onClick={generateMeme}> Generate Meme </button>
        <button
          onClick={() => {
            setMeme(null);
          }}
        >
          Choose Template
        </button>
      </div>
    </div>
  );
};

export default Meme;
