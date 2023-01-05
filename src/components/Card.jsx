import React, { useState } from 'react'

const Cards = ({card,handleClick}) => {
    const {url, name} = card
    const [Flipped, setFlipped] = useState(false);
    function handleClick() {
        setFlipped(!Flipped);
    }
    return (
        <div className={`card ${Flipped ? "flipped" : ""}`} onClick={handleClick}>
            <img src={url} alt={name} />
        </div>
        
    )
}

export default Cards;

