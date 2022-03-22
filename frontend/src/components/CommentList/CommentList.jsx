import React, { useState, useEffect} from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";


const CommentList = () => {

    const [user, token] = useAuth();
    const [comments, setComments] = useState([]);

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
            {comments &&
            comments.map((comment) => (
            <p key={comment.id}>
                {comment.user_id} {comment.video_id} {comment.text} {comment.likes} {comment.dislikes}
            </p>))}
        </div>
    );
}

export default CommentList