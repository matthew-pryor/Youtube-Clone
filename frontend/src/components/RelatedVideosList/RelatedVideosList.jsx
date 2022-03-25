import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";


const RelatedVideosList = (props) => {
    
  const [relatedVideos, setRelatedVideos] = useState([]);
  const {state} = useLocation();
  const navigate = useNavigate()

    
  async function getRelatedVideos() {
    const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${state.selectedVideo.id.videoId}&part=snippet&type=video&totalResults=5&key=AIzaSyCCrYvOGHpOT7Xi8w_XuKgUGAs7sr-Vr78
    `)
    // Matt's Key: AIzaSyAuFcOc0gvBKmWmAZUt1LPUnnN1baWifgo
    // Vance's Key: AIzaSyBuzjiMZRf5Ajpg69rAQjY92YIC18cCjS4
    // Key Three: AIzaSyCYzL9nmy5-XCl6Ci5x-Jzq2xA_Pe3PFq0
    //Key four: AIzaSyCCrYvOGHpOT7Xi8w_XuKgUGAs7sr-Vr78

    console.log(relatedVideos);
    setRelatedVideos(response.data.items);
  }
  
  useEffect(() => {
    getRelatedVideos()
  }, [state.selectedVideo])

  return ( 
      <div>
          <h1>Related Videos to "{state.selectedVideo.snippet.title}</h1>
          <table>
            <tbody>
                {relatedVideos &&
                  relatedVideos.map((selectedVideo) => (
                    <tr key={selectedVideo.etag}>
                        {/* <tr>{selectedVideo.snippet.title}</tr> */}
                        <img src={`https://i.ytimg.com/vi/${selectedVideo.id.videoId}/mqdefault.jpg`} onClick={() => {navigate("/video", {state:{selectedVideo:selectedVideo}})}}/>
                    </tr>
                ))}
            </tbody>
          </table>
      </div>
   );
}


export default RelatedVideosList;