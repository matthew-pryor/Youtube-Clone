import React, {useState, useEffect} from "react";
import DisplaySearchResults from "../../components/DisplaySearchResults/DisplaySearchResults";
import axios from "axios";



const SearchResultsPage = () => {

    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
      getSearchResults()
    }, [])
      
    async function getSearchResults(searchTerm=''){
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&search?q=${searchTerm}&type=video&key=AIzaSyBuzjiMZRf5Ajpg69rAQjY92YIC18cCjS4`)
      console.log(response.data);
      setSearchResults(response.data);
    }
    


    return ( 
        <div>
            <h1>Search Results:</h1>
            <table>
              <tbody>
                <tr>
                  {searchResults &&
                    searchResults.map((searchResults) => (
                    <img src={`https://i.ytimg.com/vi/${searchResults.id.videoId}/hqdefault.jpg`}/>
                  ))}
                </tr>
              </tbody>
            </table>
        </div>
     );
}
 
export default SearchResultsPage;