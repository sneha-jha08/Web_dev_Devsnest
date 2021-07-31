import React from 'react';

function Card({ title, num, index, setCards, cards }){
    function newCard(){
        var newCards = cards.filter((card,i)=> i !== index);
        setCards(newCards);
    }

    return (
        <div className="card">
            <h1>{title}   <button onClick = {newCard}>Delete</button></h1>
            
            <h2>You have consumed {num} calories today.</h2>
        </div>
    );
}

export default function CardsList({menu,setCards}){
    return(
        <div>
            {menu.length !==0 ? (
                menu.map((item,index)=>{
                    return (
                        <Card title={item[0]} num={item[1]} key={index} index={index} setCards={setCards} cards={menu}/>
                    );
                })
            ): (
                <div class="noItem">Deleted all items</div>
            )}
        </div>
    );
};