import './App.scss';
import { useState } from 'react';
import VideoDetails from './data/video-details.json' // A list of video objects
import Header from './components/Header/Header.js'
import CurrentVideo from './components/CurrentVideo/CurrentVideo.js'
import Description from './components/Description/Description.js'
import Comments from './components/Comments/Comments.js'
import VideoList from './components/VideoList/VideoList'

function App() {
 
  const videoList = VideoDetails; 
  const [currentVideo, setCurrentVideo] = useState(videoList[0]);
  
  function handleVideoChange(id) {
    let newVid = videoList.find(data => data.id === id);
    setCurrentVideo(newVid);
  }

  return (
    <div className="app">
      <Header />
      <CurrentVideo currVideo={currentVideo}/>
      <div className="app__content">
      <div className="app__content-left">
      <Description currVideo={currentVideo}/>
      <Comments currComments={currentVideo.comments}/>
      </div>
      <div className="app__content-right">
      <VideoList handleVideoChange={handleVideoChange} videoList={videoList} doNotShow={currentVideo.id}/>
      </div>
      </div>
    </div>
  );
}

export default App;