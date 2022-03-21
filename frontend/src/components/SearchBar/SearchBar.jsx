import React, {useState} from "react";

const SearchBar = (props) => {

const [searchRequest, setSearchRequest] = useState('');
    
    return (
        <form>
            <div>
                <input type="text" placeholder="Search YouTube" value={searchRequest} onChange={(event) => setSearchRequest(event.targetvalue)} ></input>
            </div>
        </form>
    );
}

export default SearchBar