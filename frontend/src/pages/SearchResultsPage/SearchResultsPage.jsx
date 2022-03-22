import React, {useState, useEffect} from "react";
import DisplaySearchResults from "../../components/DisplaySearchResults/DisplaySearchResults";
import axios from "axios";



const SearchResultsPage = () => {

    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
      getSearchResults()
    }, [])
      
    async function getSearchResults(searchTerm="bob ross"){
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&search?q=${searchTerm}&type=video&key=AIzaSyBuzjiMZRf5Ajpg69rAQjY92YIC18cCjS4`)
      console.log(response.data);
      console.log(response.data.items.map((entry) => {
        return(
          entry.snippet.thumbnails.default
        )
      }))
      setSearchResults(response.data);
    }
    


    return ( 
        <div>
            <h1>Search Results:</h1>
            <DisplaySearchResults parentEntries={searchResults}/>
        </div>
     );
}
 
export default SearchResultsPage;