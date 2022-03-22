import SearchBar from "../SearchBar/SearchBar";
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";
import axios from "axios";




const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [searchResults, setSearchResults] = useState([]);

useEffect(() => {
  getSearchResults()
}, [])

// async function displaySearchResults(searchResults=getSearchResults.map) {
//   let response = await axios.get(`https://www.googleapis.com/youtube/v3/results?part=snippet&q=${searchResults}&type=video&maxResults=5&key=AIzaSyBuzjiMZRf5Ajpg69rAQjY92YIC18cCjS4`)
//   console.log(response.data)
//   displaySearchResults(response.data)
// }

async function getSearchResults(searchTerm="bob ross"){
  let response = await axios.get(`https://www.googleapis.com/youtube/v3/results?part=snippet&search?q=${searchTerm}&type=video&key=AIzaSyBuzjiMZRf5Ajpg69rAQjY92YIC18cCjS4`)
  console.log(response.data);
  setSearchResults(response.data);
  // response.map(searchResults)
  // console.log(searchResults)
}

  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>React/Django JWT</b>
          </Link>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
        <li>
          <SearchBar getSearchResults={getSearchResults}/>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
