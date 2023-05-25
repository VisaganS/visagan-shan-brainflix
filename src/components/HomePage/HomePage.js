import './HomePage.scss'
import { useState } from 'react';
import VideoDetails from '../../data/video-details.json'
import CurrentVideo from '../CurrentVideo/CurrentVideo.js'
import Description from '../Description/Description.js'
import Comments from '../Comments/Comments.js'
import VideoList from '../VideoList/VideoList.js'

const HomePage = () => {

    const videoList = VideoDetails; 
  const [currentVideo, setCurrentVideo] = useState(videoList[0]);
  
  function handleVideoChange(id) {
    let newVid = videoList.find(data => data.id === id);
    setCurrentVideo(newVid);

  }

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