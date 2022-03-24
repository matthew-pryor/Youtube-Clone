import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";


const SearchBar = () => {

const [searchTerm, setSearchTerm] = useState('');
const navigate = useNavigate();

const handleSubmit = (event) => {
    event.preventDefault();
    console.log(searchTerm);
    setSearchTerm(searchTerm);
    navigate("/search", {state:{searchTerm:searchTerm}});
}
    
    return (
        <form>
            <div>
                <input type="text" placeholder="Search YouTube" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} ></input>
            </div>
            <button onClick={handleSubmit} type="submit">Search</button>
        </form>
    );
}

export default SearchBar