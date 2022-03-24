import React, {useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useLocation } from "react-router-dom";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import CommentList from "../../components/CommentList/CommentList";
import CommentForm from "../../components/CommentForm.jsx/CommentForm";
import RelatedVideosList from "../../components/RelatedVideosList/RelatedVideosList";

const VideoPage = (props) => {
    
    const [user, token] = useAuth();
    const {state} = useLocation();
    
    return ( 
        <div>
            <h1>Video Player for {user.username}</h1>
            <VideoPlayer selectedVideo={state.selectedVideo.id.videoId}/>
            <RelatedVideosList />
            <CommentForm />
            <CommentList />
        </div>
     );
}
 
export default VideoPage;