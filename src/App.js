import './App.css';
import { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import CardContainer from './components/CardContainer';
function App() {
  const [cards, setCards] = useState([]);
  const [players, setPlayers] = useState([]);
  const [score, setScore] = useState(0)

  const fetchCards = async () => {
    const req = await fetch("http://localhost:3001/mariocart");
    const resp = await req.json();
    setCards(resp);
  }
  useEffect(() => {
    fetchCards();
  },[])
const shuffledCards = cards.sort(() => Math.random() - 0.5)
  return (
    <div className="App">
        <Header />
        <CardContainer cards={cards} setCards={setCards} shuffledCards={shuffledCards} score={score} setScore={setScore}/>
        {/*<Leaderboard players={players} setPlayers={setPlayers}/>*/}
        <h1 className="score">Score: {score}</h1>
    </div>
  );
}

export default App;
