import React, { useState, useEffect } from "react";

const DisplaySearchResults = (props) => {
    return(
        <div>
            {props.parentEntries.map((entry) => {
                return (
                    <div>
                        {entry.snippet.thumbnails.title} {entry.snippet.thumbnails.default}
                    </div>
            )})};
        </div>
    );
};
 
export default DisplaySearchResults;