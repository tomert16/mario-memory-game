import Players from './Players';
import LeaderboardForm from './LeaderboardForm';
import Filter from './Filter';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Leaderboard = () => {
    let navigate = useNavigate();
    const [players, setPlayers] = useState([]);
    const [formToggle, setFormToggle] = useState(false);
    const [playerFilter, setPlayerFilter] = useState("")

    const fetchPlayers = async () => {
        const req = await fetch("http://localhost:3001/leaders")
        const resp = await req.json();
        setPlayers(resp);
    }
    useEffect(() => {
        fetchPlayers();
    },[])


    const handleFormToggle = () => {
        setFormToggle(!formToggle);
    }
    const filteredPlayers = players.filter((player) => {
        return player.playerName.toLowerCase().includes(playerFilter.toLowerCase())
    })
    const sortedPlayers = filteredPlayers.sort((a, b) => a.score < b.score ? 1 : -1)

    return (
        <div className="leaderboard">
            <div className="leadTitle">
                <h1>Leaderboard</h1>
                <h2 onClick={() => {
                    navigate('/')
                }}>Return to Game</h2>
            </div>
            <Filter playerFilter={playerFilter} setPlayerFilter={setPlayerFilter} />
            <div className="board">
                <div>#</div>
                <div>Name</div>
                <div>Score</div>
                <div>Date</div>
            </div>
            <div className="list">
            {sortedPlayers.map((player, index) => (
                    <Players key={player.id} player={player} index={index}/>
            ))}
            </div>
            <div className="showForm">
            {formToggle ? 
                <div>  
                    <button className="togBtn" onClick={handleFormToggle}>Hide Form </button>
                    <LeaderboardForm players={players} setPlayers={setPlayers}/>
                </div>
                :
                <button className="togBtn" onClick={handleFormToggle}>Show Form</button>
            }
            </div>
        </div>
    )
}

export default Leaderboard;