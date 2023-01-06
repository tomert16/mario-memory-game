import {useState, useRef} from 'react'

const Cards = ({card, index, cardsMatch, handleClick, count, setCount}) => {
    const {url2, url, name} = card
    const [flipped, setFlipped] = useState(true);
    // const [matched, setMatched] = useState(false);
    //const prevName = useRef(-1);
   // const [Back, setBack] = useState({url2});
    // console.log(!!Flipped)
    const flipImage = () => {
        setFlipped(!flipped)
    }
    

    function handleClick() {
        // alert(name)
        // if(count===1){
        //     setCardOne(name)
        // }
        // else if(count===2){
        //     setCardTwo(name)
        // }
        // if (name !== prevName.current){
        //     if(card[name].status === "active matched"){
        //         alert("Cards already matched");
        //     }else{
        //         if(prevName === -1){
        //             prevName.current = name;
        //             card[name].status = "active";
        //             setCards([...card])
        //             setPrevCard(name)
        //         }else{
        //             prevName.current = -1;
        //         }
        //     }
        //     } else{
        //         matchCheck(name)
        //         alert("Card currently selected")
            
            const flipTimer= () => {if(count < 2){
                setFlipped(!flipped);
                setTimeout(() => {
                    setFlipped(true)
                    if(count == 2){
                        setCount(0)
                    }
                }, 3000);
                setCount(count+=1)
                console.log(count)
            }}
                //checkWinState()
                flipTimer();
        }
        
    //     // const checkWinState = () => {
    //     //     console.log(cardOne)
    //     //     console.log(cardTwo)
    //     //     if(cardOne === cardTwo){
    //     //         console.log("matched")
    //     //     }
    //     //}
    
    

    // useEffect(() => {
    //     if (flipped) {
    //       return;
    //     }
    //     const cards = document.querySelectorAll(".card.flipped");
    //     if (cards.length === 2) {
    //       if (cards[0].name === cards[1].name) {
    //         //setScore((score) => score + 1);
    //         //setMatched(true);
    //         setFlipped(false);
    //         cards.forEach((card) => card.classList.add("matched"));
    //         setTimeout(() => {
    //           cards.forEach((card) => setCards((cards) => cards.filter((c) => c.name !== card.getAttribute("data-name"))));
    //         }, 2000);
    // } else {
    //         setTimeout(() => {
    //           cards.forEach((card) => card.classList.remove("flipped"));
    //         }, 2000);
    //       }
    //     }
    //   }, [flipped]);
    return (
        <div className={`card ${card.status}}`} >
            {/* <img src={url2}/> */}
            <img className={`card ${flipped ? "flipped" : ""}`} draggable="false" onClick={() => {
                //flipImage();
                cardsMatch(index)
                handleClick()}}
            data-name={name}
            src={flipped? url2 : url} alt="Card" />
        </div>
    )
}

export default Cards;