import React, {useState, useEffect} from "react";
import DisplaySearchResults from "../../components/DisplaySearchResults/DisplaySearchResults";
import axios from "axios";
import { useLocation } from "react-router-dom";



const SearchResultsPage = (props) => {

    const [searchResults, setSearchResults] = useState([]);
    const {state} = useLocation()

      
<<<<<<< HEAD
    async function getSearchResults(){
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${state.searchTerm}&totalResults=5&key=AIzaSyBuzjiMZRf5Ajpg69rAQjY92YIC18cCjS4`)
      console.log(searchResults);
      setSearchResults(response.data.items);
=======
    async function getSearchResults(searchTerm=''){
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&search?q=${searchTerm}&type=video&key=AIzaSyBuzjiMZRf5Ajpg69rAQjY92YIC18cCjS4`)
      console.log(response.data);
      setSearchResults(response.data);
>>>>>>> acaed429bb0dbc9c059bb9269fc44b3e47654835
    }
    
    useEffect(() => {
      getSearchResults(state.searchTerm)
    }, [])

    return ( 
        <div>
            <h1>Search Results:</h1>
            <table>
              <tbody>
<<<<<<< HEAD
                  {searchResults &&
                    searchResults.map((searchResults) => (
                      <tr>
                        <img src={`https://i.ytimg.com/vi/${searchResults.id.videoId}/hqdefault.jpg`}/>
                      </tr>
                  ))}
=======
                <tr>
                  {searchResults &&
                    searchResults.map((searchResults) => (
                    <img src={`https://i.ytimg.com/vi/${searchResults.id.videoId}/hqdefault.jpg`}/>
                  ))}
                </tr>
>>>>>>> acaed429bb0dbc9c059bb9269fc44b3e47654835
              </tbody>
            </table>
        </div>
     );
}
 
export default SearchResultsPage;