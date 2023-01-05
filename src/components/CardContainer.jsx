import Card from './Card'
import React, { useState } from 'react'

const CardContainer = ( {cards, url2}) => {
    const [selected, setSelected] = useState(url2);
    function handleClick() {
        setSelected(!selected);
    }
    const shuffledCards = cards.sort(( ) => Math.random() - 0.5)
    
    return (
        <div className="container">
            
            {shuffledCards.map((card) => (
                <Card key={card.id} card={card} /> 
            ))}
        </div>
    )
}

export default CardContainer;
