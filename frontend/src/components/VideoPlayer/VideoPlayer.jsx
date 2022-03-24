import React from "react";
import { useEffect, useState } from "react/cjs/react.production.min";
import useAuth from "../../hooks/useAuth";

const VideoPlayer = (props) => {

    

    return (
        <iframe className="video" id="ytplayer" type="text/html" width="540" height="360"
        src={`https://www.youtube.com/embed/${props.selectedVideo}?autoplay=1&origin=http://example.com`}
        frameBorder="0"></iframe>
    );
}

export default VideoPlayer