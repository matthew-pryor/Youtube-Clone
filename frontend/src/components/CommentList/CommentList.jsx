import React, { useState, useEffect} from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";


const CommentList = () => {

    const [user, token] = useAuth();
    const [comment, setComments] = useState([]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                let response = await axios.get("http://127.0.0.1:8000/api/comments/", {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                });
                setComments(response.data);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchComments();
    }, [token]);

    return (
        <div>
            {comment &&
            comment.map((comment) => (
            <p key={comment.id}>
                {user.username} {comment.video_id} {comment.text} {comment.likes} {comment.dislikes}
            </p>))}
        </div>
    );
}

export default CommentList