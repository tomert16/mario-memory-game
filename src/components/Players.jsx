const Players = ({player, index}) => {
    const {playerName, score, date} = player;
    return (
        <div className="player">
            <span>{index + 1}</span>
            <span>{playerName}</span>
            <span>{score}</span>
            <span>{date}</span>
        </div>
    )
}

export default Players;