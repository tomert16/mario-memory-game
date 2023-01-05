import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import MatchedCards from './components/MatchedCards';


function App() {
  const [cards, setCards] = useState([]);


  const fetchCards = async () => {
    const req = await fetch("http://localhost:3000/mariocart");
    const resp = await req.json();
    setCards(resp);
  }
  useEffect(() => {
    fetchCards();
  },[])
  return (
    <div className="App">
        <Header />
        <CardContainer cards={cards} setCards={setCards}/>
        <MatchedCards />
    </div>
  );
}

export default App;
