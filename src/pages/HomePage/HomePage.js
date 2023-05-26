import './HomePage.scss'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import VideoDetails from '../../data/video-details.json'
import CurrentVideo from '../../components/CurrentVideo/CurrentVideo.js'
import Description from '../../components/Description/Description.js'
import Comments from '../../components/Comments/Comments.js'
import VideoList from '../../components/VideoList/VideoList.js'

const HomePage = () => {

    const apiUrl = "https://project-2-api.herokuapp.com";
    const apiKey = process.env.REACT_APP_API_KEY;
    const videoList = VideoDetails;
  const [currentVideo, setCurrentVideo] = useState(videoList[0]);
  
  function handleVideoChange(id) {
    let newVid = videoList.find(data => data.id === id);
    setCurrentVideo(newVid);
  }

  useEffect(()=>{
    axios
    .get(`${apiUrl}/videos?api_key=${apiKey}`)
    .then(response => {
      console.log(response.data[0]);
    })
  })

    return(
    <div className="homepage">
      <CurrentVideo currVideo={currentVideo}/>
      <div className="homepage__content">
      <div className="homepage__content-left">
      <Description currVideo={currentVideo}/>
      <Comments currComments={currentVideo.comments}/>
      </div>
      <div className="homepage__content-right">
      <VideoList handleVideoChange={handleVideoChange} videoList={videoList} doNotShow={currentVideo.id}/>
      </div>
      </div>
    </div>
    );
}

export default HomePage;