import Card from './Card'
import React, { useState, useRef, useEffect } from 'react'

const CardContainer = ( {cards, shuffledCards, setCards, score, setScore}) => {
    
    const [count, setCount] = useState(0)
    const [shownCards, setShownCards] = useState([])
   const [timer, setTimer] = useState(30)
   
    useEffect(()=>{
        if(shownCards.length >= 2){
            matchCheck()
            setCount(0)
            setShownCards([])
        }
    },[shownCards])
    const matchCheck = () => {


        
        console.log(shownCards[0])
        
        if (shownCards[0].name === "Mario" && shownCards[1].name === "Mario") {
            console.log("Its a match")
            setScore(score += 1)
            return true
        }else{
            console.log("no match")
            return false
        }
    }
    useEffect(() => {
        const timerId = setTimeout(() => {
          setTimer( timer - 1);
        }, 1000);
        if (timer === 0){
          setTimer(30);
          setCards(cards)
          setScore(0);
          clearTimeout(timerId);
          alert("Game Over! Add Your Score to the Leaderboard");
        }
      },[timer])
            
    

    return (
        <div className="container">
            {shuffledCards.map((card, index) => (
                <Card 
                key={index} 
                card={card}    
                index={index}
                count={count}
                setCount={setCount}
                matchCheck={matchCheck}
                setShownCards={setShownCards}
                shownCards={shownCards}
                /> 
                ))}
                <div className="timer">Time left : {timer} </div>
        </div>
    )
}

export default CardContainer;