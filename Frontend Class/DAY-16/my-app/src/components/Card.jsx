const Card =()=>{
    const Image=()=>{
        return (  
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"/>
        );
    };//card parent component h and image child component
    return (
        <div className="card">
        <Image/>        
        <h2>React Card</h2>
        <p>This is a Card</p>
        </div>
    );
};

export default Card ;