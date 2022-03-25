import axios from "axios";
import React, {useState, useEffect} from "react";
import useAuth from "../../hooks/useAuth";


const ReplyForm = (props) => {

    const [user, token] = useAuth();
    const [text, setText] = useState('');
    const [comment, setComments] = useState([]);

    async function handleSubmitForm(event) {
        event.preventDefault(); //prevent page refresh when commenting
        let newReply = {
            user_id: user.username,
            comment: comment.id,
            text: text,
        };
        console.log(comment.id, newReply);
        await axios.post(`http://127.0.0.1:8000/api/replies/comments/${comment.id}/`, newReply, { 
            headers: {
              Authorization: "Bearer " + token,
            },
    })};


    return ( 
        <form onSubmit={handleSubmitForm}>
            <label>Reply:</label>
            <input type='text' placeholder="Reply Here!" value={text} onChange={(event) => setText(event.target.value)}/>
            <button type='submit'>Post</button>
        </form>
     );
}
 
export default ReplyForm;

//http://127.0.0.1:8000/api/replies/comments/7/