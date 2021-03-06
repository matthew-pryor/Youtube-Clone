import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import "./SearchResultsPage.css"



const SearchResultsPage = (props) => {

    const [searchResults, setSearchResults] = useState([]);
    const {state} = useLocation();
    const navigate = useNavigate()

      
    async function getSearchResults() {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${state.searchTerm}&part=snippet&type=video&totalResults=5&key=AIzaSyCCrYvOGHpOT7Xi8w_XuKgUGAs7sr-Vr78
      `)
      // Matt's Key: AIzaSyAuFcOc0gvBKmWmAZUt1LPUnnN1baWifgo
      // Vance's Key: AIzaSyBuzjiMZRf5Ajpg69rAQjY92YIC18cCjS4
      // Key Three: AIzaSyCYzL9nmy5-XCl6Ci5x-Jzq2xA_Pe3PFq0
      //Key four: AIzaSyCCrYvOGHpOT7Xi8w_XuKgUGAs7sr-Vr78

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
                    searchResults.map((selectedVideo) => (
                      <tr key={selectedVideo.etag}>
                        <br></br>
                        <tr>{selectedVideo.snippet.title}</tr>
                          <img src={`https://i.ytimg.com/vi/${selectedVideo.id.videoId}/hqdefault.jpg`} onClick={() => {navigate("/video", {state:{selectedVideo:selectedVideo}})}}/>
                          <p>{selectedVideo.snippet.description}</p>
                          <br></br>
                          <br></br>
                      </tr>
                  ))}
              </tbody>
            </table>
        </div>
     );
}
 
export default SearchResultsPage;