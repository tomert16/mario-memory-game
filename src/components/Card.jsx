import {useState, useRef} from 'react'

const Cards = ({card, index, matchCheck, count, setCount, setShownCards, shownCards}) => {
    const {url2, url, name, } = card
    const [flipped, setFlipped] = useState(true);
    const flipImage = () => {
        setFlipped(!flipped)
    }
    

    function handleClick() {        
            const flipTimer= () => {
                if(count < 2){
                setFlipped(!flipped);
                setTimeout(() => {
                    setFlipped(true)
                    if(count == 2){
                        setCount(0)
                    }
                }, 1000);
                setCount(count+=1)
                console.log(count)
            }}
            flipTimer();
            setShownCards([...shownCards, card])
            
        }
    return (
        <div className="card-grid" >
            {/* <img src={url2}/> */}
            <img className={`card ${flipped ? "flipped" : ""}`} draggable="false" onClick={() => {
                //cardsMatch()
                handleClick()}}
            data-name={name}
            src={flipped? url2 : url} alt="Card" />
        </div>
    )
}

export default Cards;