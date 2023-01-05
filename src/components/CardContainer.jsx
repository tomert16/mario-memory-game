import Card from './Card'
import React, { useState } from 'react'

const CardContainer = ( {cards, url}) => {
    const [selected, setSelected] = useState(false);
    const handleClick = (card) => {
        setCards((prevCards) =>
            prevCards.map((c) => {
                if (c === card) {
                    return { ...c, flipped: !c.flipped };
                }
                return c;
            })
        );
    };
    return (
        <div className="container">
            <div className={`card ${selected ? "selected" : ""}`} onClick= {handleClick} setSelected= {setSelected}>
                <img src={url} />
            </div>
            {cards.map((card) => (
                <Card key={card.id} card={card} /> 
            ))}
        </div>
    )
}

export default CardContainer;
