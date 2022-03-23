import React, {useState, useEffect} from "react";
import DisplaySearchResults from "../../components/DisplaySearchResults/DisplaySearchResults";
import axios from "axios";
import { useLocation } from "react-router-dom";



const SearchResultsPage = (props) => {

    const [searchResults, setSearchResults] = useState([]);
    const {state} = useLocation()

      
    async function getSearchResults(){
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${state.searchTerm}&totalResults=5&key=AIzaSyBuzjiMZRf5Ajpg69rAQjY92YIC18cCjS4`)
      console.log(searchResults);
      setSearchResults(response.data.items);
    }
    
    useEffect(() => {
      getSearchResults(state.searchTerm)
    }, [])

    return ( 
        <div>
            <h1>Search Results:</h1>
            <table>
              <tbody>
                  {searchResults &&
                    searchResults.map((searchResults) => (
                      <tr>
                        <img src={`https://i.ytimg.com/vi/${searchResults.id.videoId}/hqdefault.jpg`}/>
                      </tr>
                  ))}
              </tbody>
            </table>
        </div>
     );
}
 
export default SearchResultsPage;