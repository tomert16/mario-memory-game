import Card from './Card'
import React, { useState } from 'react'

const CardContainer = ( {cards, setCards, url, url2}) => {
    const [selected, setSelected] = useState(url2);
    function handleClick() {
        setSelected(!selected);
    }
    return (
        <div className="container">
            <div className={`card ${selected ? "selected" : ""}`} onClick={handleClick}>
                <img src={url} />
            </div>
            {cards.map((card) => (
                <Card key={card.id} card={card} /> 
            ))}
        </div>
    )
}

export default CardContainer;
