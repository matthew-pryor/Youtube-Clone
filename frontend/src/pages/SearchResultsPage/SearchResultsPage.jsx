import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";



const SearchResultsPage = (props) => {

    const [searchResults, setSearchResults] = useState([]);
    const {state} = useLocation();
    const navigate = useNavigate()

      
    async function getSearchResults() {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${state.searchTerm}&part=snippet&type=video&totalResults=5&key=AIzaSyAuFcOc0gvBKmWmAZUt1LPUnnN1baWifgo`)
      // Matt's Key: AIzaSyAuFcOc0gvBKmWmAZUt1LPUnnN1baWifgo
      // Vance's Key: AIzaSyBuzjiMZRf5Ajpg69rAQjY92YIC18cCjS4
      console.log(searchResults);
      setSearchResults(response.data.items);
    }
    
    useEffect(() => {
      getSearchResults()
    }, [state.searchTerm])

    return ( 
        <div>
            <h1>Search Results for: "{state.searchTerm}"</h1>
            <table>
              <tbody>
                  {searchResults &&
                    searchResults.map((entry) => (
                      <tr>
                        <tr>{entry.snippet.title}</tr>
                          <img src={`https://i.ytimg.com/vi/${entry.id.videoId}/hqdefault.jpg`} onClick={() => {navigate("/video", {state:{selectedVideo:entry}})}}/>
                          <p>{entry.snippet.description}</p>
                      </tr>
                  ))}
              </tbody>
            </table>
        </div>
     );
}
 
export default SearchResultsPage;