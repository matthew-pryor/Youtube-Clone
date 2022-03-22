import React from "react";
import Navbar from "../NavBar/NavBar";

const VideoPlayer = () => {

    return (
        <iframe id="ytplayer" type="text/html" width="540" height="360"
        src='https://www.youtube.com/embed/lLWEXRAnQd0?autoplay'
        frameborder="0"></iframe>
    );
}

export default VideoPlayer