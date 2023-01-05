import {useState} from 'react'

const LeaderboardForm = ({players, setPlayers}) => {
    const [nameInput, setNameInput] = useState("");
    const [scoreInput, setScoreInput] = useState("");
    const [dateInput, setDateInput] = useState("");


    const addNewScore = async () => {
        const scoreData = {
            playerName: nameInput,
            score: scoreInput,
            date: dateInput,
        }
        const req = await fetch("http://localhost:3001/leaders",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(scoreData)
        })
        const resp = await req.json();
        setPlayers([...players, resp])
        setNameInput("");
        setScoreInput("");
        setDateInput("");
    }
    return (
        <form className="form" onSubmit={(e) => {
            e.preventDefault();
            addNewScore();
        }}>
            <label>
                Name:
                <input 
                    type="text" 
                    name="name" 
                    value={nameInput} 
                    onChange={e => setNameInput(e.target.value)}
                />
            </label>
            <label>
                Score:
                <input 
                    type="text" 
                    name="score" 
                    value={scoreInput}
                    onChange={(e) => setScoreInput(e.target.value)}
                />
            </label>
            <label>
                Date:
                <input 
                    type="text" 
                    name="date"
                    value={dateInput}
                    onChange={(e) => setDateInput(e.target.value)}
                />
            </label>
            <button type="submit">Add Your Score</button>
        </form>
    )
}

export default LeaderboardForm;