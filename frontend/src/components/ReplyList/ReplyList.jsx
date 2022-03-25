import React, { useState, useEffect} from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const ReplyList = (props) => {

    const [user, token] = useAuth();
    const [reply, setReplies] = useState([]);

    async function fetchReplies() {
        try{
            let response = await axios.get(`http://127.0.0.1:8000/api/replies/comments/${props.commentId}/`)
            console.log(response.data)
            setReplies(response.data)
        }
        catch(error){
            console.log(error.message)
        }};

    useEffect(() => {
        fetchReplies()
    }, []);

    return (
        <div>
            {reply &&
            reply.map((reply) => (
            <p key={reply.id}>
                {user.username} {reply.text}
            </p>
            ))}
        </div>
    );
}

export default ReplyList;