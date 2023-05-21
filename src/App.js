import './App.scss';
import { useState } from 'react';
import VideoDetails from './data/video-details.json' // A list of video objects
import Header from './components/Header/Header.js'
import CurrentVideo from './components/CurrentVideo/CurrentVideo.js'
import Description from './components/Description/Description.js'
import Comments from './components/Comments/Comments.js'
import VideoList from './components/VideoList/VideoList'

// Components To create
// Header, CurrentVideo (The one being displayed), Description (details of the video and like button), 
// CommentSection, VideoListArea

function App() {
  // We need to keep state at the highest level (App.js)
  // We want to pass state and update state in the components
  const videoList = VideoDetails; //  may not need to be a state var
  const [currentVideo, setCurrentVideo] = useState(videoList[0]);

  //This updates the current video
  function handleVideoChange(id) {
    let newVid = videoList.find(data => data.id === id);
    setCurrentVideo(newVid);
  }

  return (
    <div className="App">
      <Header />
      <CurrentVideo currVideo={currentVideo}/>
      <Description currVideo={currentVideo}/>
      <Comments currComments={currentVideo.comments}/>
      {/*<VideoList onVideoChange={handleVideoChange} vidList={videoList} doNotShow={currentVideo}/> */}
    </div>
  );
}

export default App;

/**
 *          App
 * Video List       Header        Video
 * Video Tile         icon         PlayBtn ProgressBar 
 * 
 * 
 * 
 */
