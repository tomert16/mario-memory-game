import Card from './Card'
import React, { useState, useRef } from 'react'

const CardContainer = ( {cards, url2, shuffledCards, setCards}) => {
    //const [selected, setSelected] = useState(url2);
    const [prevCard, setPrevCard] = useState(-1);
    const prevName = useRef(-1);
    // function handleClick() {
    //     setSelected(!selected);
    // }
    //const shuffledCards = cards.sort(() => Math.random() - 0.5)
    // const checkMatch = () => {
    //     if (cards.id === prev.id){
    //         console.log("Match")
    //         //return cards.id !== id
    //     }
    // }

    const [count, setCount] = useState(0)
    const matchCheck = (currentCard) => {
            if(cards[currentCard].id === cards[prevCard].id){
                cards[prevCard].status = "active matched";
                cards[currentCard].status = "active matched"
                setPrevCard(-1)
            }else{
                cards[currentCard].status = "active";
                setCards([...cards])
                setTimeout(() => {
                    cards[currentCard].status="unmatch";
                    cards[prevCard].status = "unmatch";
                    setCards([...cards]);
    
                },1000)
            }}
            
    
    const cardsMatch = (index) => {
        // alert(name)
        // if(count===1){
            //     setCardOne(name)
            // }
            // else if(count===2){
                //     setCardTwo(name)
                // }
                if (index !== prevName.current){
                    if(cards[index].status === "active matched"){
                        alert("Cards already matched");
                    }else{
                        if(prevName === -1){
                            prevName.current = index;
                            cards[index].status = "active";
                            setCards([...cards])
                            setPrevCard(index)
                        }else{
                            prevName.current = -1;
                        }
                    }
                } else{
                    matchCheck(cards.name)
                    alert("Card currently selected")
                }
            }
    
    
    // const [cardOne, setCardOne] = useState("")

    // const [cardTwo, setCardTwo] = useState("")

    return (
        <div className="container">
            
            {shuffledCards.map((card, index) => (
                <Card 
                    key={index} 
                    card={card}    
                    index={index}
                    count={count}
                    setCount={setCount}
                    cardsMatch={cardsMatch}
                    
                /> 
            ))}
        </div>
    )
}

export default CardContainer;