import React, { useState } from 'react'

const Cards = ({card}) => {
    const {url2, url, name} = card
    const [Flipped, setFlipped] = useState(true);
   // const [Back, setBack] = useState({url2});
    // console.log(!!Flipped)
    function handleClick() {
        setFlipped(!Flipped);
        setTimeout(() => {
            setFlipped(true);
        }, 2000);
    }
    return (
        <div className={`card ${Flipped ? "flipped" : ""}`} onClick={handleClick}>
            {/* <img src={url2}/> */}
            <img src={Flipped? url2 : url} alt={name} />
        </div>
    )
}

export default Cards;

