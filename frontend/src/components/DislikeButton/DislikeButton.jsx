import React, { useEffect, useState } from "react";
import "./DislikeButton.css"


const DislikeButton = (props) => {
    
    const [buttonClass, setButtonClass] = useState('inactive');
    
    function changeToDislike(event) {
        if (buttonClass === 'inactive') {
           setButtonClass('active')
        }
        else {
            setButtonClass('inactive')
        }};
    
    return ( 
        <div>
            <button className={buttonClass} onClick={changeToDislike}>Dislike</button>
        </div>
     );
}
 
export default DislikeButton;