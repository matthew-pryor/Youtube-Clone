import React, { useEffect, useState } from "react/cjs/react.production.min";
import axios from "axios";
import useAuth from "../../hooks/useAuth";


const LikeButton = () => {
    
    const [buttonClass, setButtonClass] = useState('inactive');
    const [user, token] = useAuth;
    const [likes, setLikes] = useState([]);
    const [comment, setComments] = useState([]);
    
    async function changeToLike(event) {
        event.preventDefault();
        if (buttonClass === 'inactive') {
            let response = await axios.put(`http://127.0.0.1:8000/api/comments/${comment.id}/`, {likes:comment.likes+1})
            setButtonClass('liked')
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