import React, {useState, useEffect} from "react";
import axios from "axios";


const RelatedVideosList = (props) => {
    
    const [relatedVideos, setRelatedVideos] = useState([])
    
    async function getrelatedVideos() {
        const related = await axios.get(`https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.search.list?part=snippet&type=video&relatedToVideoId=E3Huy2cdih0`)
        console.log(related.data.items);
        // setRelatedVideos(related.data.items)
    }
    
    
    return ( 
        <div>
            
        </div>
     );
}


export default RelatedVideosList;