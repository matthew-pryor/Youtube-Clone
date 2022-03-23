import React, {useState} from "react";
import useAuth from "../../hooks/useAuth";

const CommentForm = (props) => {
    
    const [user, token] = useAuth();
    const [text, setText] = useState('');

    function handleSubmit(event) {
        event.preventDefault(); //prevent page refresh when posting
        let newComment = {
            user_id: user,
            video_id: props.video.id.videoId,
            text: text,
            likes: 0,
            dislikes: 0,
        };
        console.log(newComment);
        props.newComment(newComment);
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <label>Comment:</label>
            <input type='text'/>
            <button type='submit'>Post</button>
        </form>

     );
}
 
export default CommentForm;