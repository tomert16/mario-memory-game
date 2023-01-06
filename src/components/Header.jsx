import { useNavigate } from "react-router-dom";
const Header = () => {
    let navigate = useNavigate();
    return (
        <div className="header">
            <h1 className="title">Where is Mario??</h1>
            <h2 onClick={() => {
                navigate("/leaderboard");
            }}>Leaderboard</h2>
            <h3 onClick={() => {
                navigate("/new-card");
            }}
            >Add Cards</h3>
        </div>
    )
}

export default Header;