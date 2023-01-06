import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import CardContainer from './components/CardContainer';
import MatchedCards from './components/MatchedCards';
import Leaderboard from './components/Leaderboard';

function App() {
  const [cards, setCards] = useState([]);
  const [players, setPlayers] = useState([]);

  const fetchCards = async () => {
    const req = await fetch("http://localhost:3001/mariocart");
    const resp = await req.json();
    setCards(resp);
  }
  useEffect(() => {
    fetchCards();
  },[])
//   const fetchPlayers = async () => {
//     const req = await fetch("http://localhost:3001/leaders")
//     const resp = await req.json();
//     setPlayers(resp);
// }
// useEffect(() => {
//     fetchPlayers();
// },[])
const shuffledCards = cards.sort(() => Math.random() - 0.5)
  return (
    <div className="App">
        <Header />
        <CardContainer cards={cards} setCards={setCards} shuffledCards={shuffledCards}/>
        {/*<Leaderboard players={players} setPlayers={setPlayers}/>*/}
        <MatchedCards />
    </div>
  );
}

export default App;
