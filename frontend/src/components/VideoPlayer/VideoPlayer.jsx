import React from "react";
import CommentForm from "../CommentForm.jsx/CommentForm";

const VideoPlayer = (props) => {

    return (
        <div>
            <iframe className="video" id="ytplayer" type="text/html" width="1280" height="720"
            src={`https://www.youtube.com/embed/${props.selectedVideo}?autoplay=1&origin=http://example.com`}
            frameBorder="0"></iframe>

        </div>
    );
}

export default VideoPlayer