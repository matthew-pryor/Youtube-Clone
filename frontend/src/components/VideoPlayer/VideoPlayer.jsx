import React from "react";

const VideoPlayer = () => {

    //entry.id.videoID

    let thing = 'GMkKr3qOLs4'

    return (
        <iframe id="ytplayer" type="text/html" width="540" height="360"
        src={`https://www.youtube.com/embed/${thing}?autoplay=1&origin=http://example.com`}
        frameborder="0"></iframe>
    );
}

export default VideoPlayer