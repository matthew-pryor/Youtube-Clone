import React, { useState, useEffect} from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";


const CommentList = (props) => {

    const [user, token] = useAuth();
    const [comment, setComments] = useState([]);

    async function fetchComments() {
        try{
            let response = await axios.get(`http://127.0.0.1:8000/api/comments/video_id?video_id=${props.selectedVideo}`)
            console.log(response.data)
            setComments(response.data.filter((comment)=>{
                if (comment.video_id===props.selectedVideo) {
                    return comment;
                }}));
        }
        catch(error){
            console.log(error.message)
        }};

    useEffect(() => {
        fetchComments()
    }, []);

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