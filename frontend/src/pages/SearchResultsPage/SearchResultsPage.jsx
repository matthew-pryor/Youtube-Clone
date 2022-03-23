import React, {useState, useEffect} from "react";
import DisplaySearchResults from "../../components/DisplaySearchResults/DisplaySearchResults";
import axios from "axios";
import { useLocation } from "react-router-dom";



const SearchResultsPage = (props) => {

    const [searchResults, setSearchResults] = useState([]);
    const {state} = useState('')

      
    async function getSearchResults() {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${props.searchTerm}&totalResults=5&key=AIzaSyAuFcOc0gvBKmWmAZUt1LPUnnN1baWifgo`)
      // Matt's Key: AIzaSyAuFcOc0gvBKmWmAZUt1LPUnnN1baWifgo
      // Vance's Key: AIzaSyBuzjiMZRf5Ajpg69rAQjY92YIC18cCjS4
      console.log(searchResults);
      setSearchResults(response.data.items);
      console.log(props.searchTerm)
    }
    
    useEffect(() => {
      getSearchResults()
    }, [])

    return ( 
        <div>
            <h1>Search Results for: "{props.searchTerm}"</h1>
            <table>
              <tbody>
                  {searchResults &&
                    searchResults.map((entry) => (
                      <tr key={entry.etag}>
                        <img src={`https://i.ytimg.com/vi/${entry.id.videoId}/hqdefault.jpg`} />
                      </tr>
                  ))}
              </tbody>
            </table>
        </div>
     );
}
 
export default SearchResultsPage;