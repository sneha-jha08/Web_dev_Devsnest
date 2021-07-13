const Card=(props)=>{
 const {img, title}=props;
return(

<div className="container">
    <div className="card">
    <img src={img} alt=""></img>
    <div className="title">{title}</div>
    <button>Download</button>
    </div>
</div>
);
}

export default Card;