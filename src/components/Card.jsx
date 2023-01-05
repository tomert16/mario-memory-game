import React, { useState } from 'react'

const Cards = ({card}) => {
    const {url2, url, name} = card
    const [Flipped, setFlipped] = useState({url});
    const [Back, setBack] = useState({url2});
    function handleClick() {
        setFlipped(!Flipped);
    }
    return (
        <div className={`card ${Flipped ? "flipped" : ""}`} onClick={handleClick}>
            <img src={url}/>
            <img src={url2} alt={name} />
        </div>
    )
}

export default Cards;

