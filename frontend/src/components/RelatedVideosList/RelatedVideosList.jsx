import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";


const RelatedVideosList = (props) => {
    
    const [relatedVideos, setRelatedVideos] = useState([])
    const {state} = useLocation();
    const navigate = useNavigate();
    
    async function getRelatedVideos() {
        const related = await axios.get(`https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.search.list?part=snippet&type=video&relatedToVideoId=${state.selectedVideo.id.videoId}`)
        console.log(related.data);
        setRelatedVideos(related.data.items);
    }
    
    useEffect(() => {
        getRelatedVideos()
    }, [state.selectedVideo])

    return ( 
        <div>
            <h1>Search Results for: "{state.searchTerm}"</h1>
            <table>
              <tbody>
                  {relatedVideos &&
                    relatedVideos.map((entry) => (
                      <tr>
                        <tr>{entry.snippet.title}</tr>
                          <img src={`https://i.ytimg.com/vi/${entry.id.videoId}/mqdefault.jpg`} onClick={() => {navigate("/video", {state:{selectedVideo:entry}})}}/>
                      </tr>
                  ))}
              </tbody>
            </table>
        </div>
     );
}


export default RelatedVideosList;