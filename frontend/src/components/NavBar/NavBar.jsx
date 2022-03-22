import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

//import CommentList from "../CommentList/CommentList";




const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();

// async function displaySearchResults(searchResults=getSearchResults.map) {
//   let response = await axios.get(`https://www.googleapis.com/youtube/v3/results?part=snippet&q=${searchResults}&type=video&maxResults=5&key=AIzaSyBuzjiMZRf5Ajpg69rAQjY92YIC18cCjS4`)
//   console.log(response.data)
//   displaySearchResults(response.data)
// }

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

      </ul>
    </div>
  );
};

export default Navbar;
