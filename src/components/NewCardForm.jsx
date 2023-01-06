import {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function NewCardForm() {
    const [searchTerm, setSearchTerm] = useState("")
    let navigate = useNavigate();
    return (
    <div>
        <div className="leadTitle">
        <h1>Add Your Own Card</h1>
        <h2 onClick={() => {
            navigate('/')
        }}>Return to Game</h2>
        </div>
    <form id="new-card">
        <label for="name">Name: </label>
        <input type="text" name="name" id="new-name" />
        <label for="image">Image: </label>
        <input type="text" name="image" id="new-image" />
        <input type="submit" value="Create" />
      </form>
      </div>
    );
  }

  export default NewCardForm