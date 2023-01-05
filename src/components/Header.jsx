import { useNavigate } from "react-router-dom";
const Header = () => {
    let navigate = useNavigate();
    return (
        <div className="header">
            <h1 className="title">Mario Memory Game</h1>
            <h2 onClick={() => {
                navigate("/leaderboard");
            }}>Leaderboard</h2>
        </div>
    )
}

export default Header;