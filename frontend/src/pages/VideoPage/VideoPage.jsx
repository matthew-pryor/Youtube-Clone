import React, {useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import CommentList from "../../components/CommentList/CommentList";
import CommentForm from "../../components/CommentForm.jsx/CommentForm";
import RelatedVideosList from "../../components/RelatedVideosList/RelatedVideosList";
import "./VideoPage.css"

const VideoPage = (props) => {
    
    const [user, token] = useAuth();
    const {state} = useLocation();
    
    return ( 
        <div>
            <h1>Video Player for {user.username}</h1>:
            <h1>{state.selectedVideo.snippet.title}</h1>
            <VideoPlayer selectedVideo={state.selectedVideo.id.videoId}/>
            <CommentForm selectedVideo={state.selectedVideo.id.videoId}/>
            <CommentList selectedVideo={state.selectedVideo.id.videoId}/>
            <RelatedVideosList selectedVideo={state.selectedVideo.id.videoId}/>
    
        </div>
     );
}
 
export default VideoPage;