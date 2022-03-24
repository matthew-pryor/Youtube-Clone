import axios from "axios";
import React, {useState, useEffect} from "react";
import useAuth from "../../hooks/useAuth";

const CommentForm = (props) => {
    
    const [user, token] = useAuth();
    const [text, setText] = useState('');

    async function handleSubmitForm(event) {
        event.preventDefault(); //prevent page refresh when commenting
        let newComment = {
            user_id: user.username,
            video_id: props.selectedVideo,
            text: text,
            likes: 0,
            dislikes: 0,
        };
        console.log(newComment);
        await axios.post('http://127.0.0.1:8000/api/comments/', newComment, { 
            headers: {
              Authorization: "Bearer " + token,
            },
    })};


    return ( 
        <form onSubmit={handleSubmitForm}>
            <label>Comment:</label>
            <input type='text' placeholder="Comment Here!" value={text} onChange={(event) => setText(event.target.value)}/>
            <button type='submit'>Post</button>
        </form>
     );
}
 
export default CommentForm;