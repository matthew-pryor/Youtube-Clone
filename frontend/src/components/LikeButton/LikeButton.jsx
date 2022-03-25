import React, { useEffect, useState } from "react";
import "./LikeButton.css"


const LikeButton = (props) => {
    
    const [buttonClass, setButtonClass] = useState('inactive');
    
    function changeToLike(event) {
        if (buttonClass === 'inactive') {
           setButtonClass('active')
        }
        else {
            setButtonClass('inactive')
        }};
    
    return ( 
        <div>
            <button className={buttonClass} onClick={changeToLike}>Like</button>
        </div>
     );
}
 
export default LikeButton;