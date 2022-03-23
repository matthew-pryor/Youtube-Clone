import React from "react";
import useAuth from "../../hooks/useAuth";

const VideoPlayer = (props) => {

    let selectedVideoId = 'GMkKr3qOLs4'

    return (
        <iframe className="video" id="ytplayer" type="text/html" width="540" height="360"
        src={`https://www.youtube.com/embed/${selectedVideoId}?autoplay=1&origin=http://example.com`}
        frameBorder="0"></iframe>
    );
}

export default VideoPlayer