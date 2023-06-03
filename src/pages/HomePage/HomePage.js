import axios from 'axios';
import CurrentVideo from '../../components/CurrentVideo/CurrentVideo.js'
import Description from '../../components/Description/Description.js'
import Comments from '../../components/Comments/Comments.js'
import VideoList from '../../components/VideoList/VideoList.js'
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './HomePage.scss';

const HomePage = () => {
    const {id} = useParams();
    const apiUrl = "http://localhost:8080";
    const apiKey = process.env.REACT_APP_API_KEY;
 
  const [currentVideo, setCurrentVideo] = useState({});
  const [videoList, setVideoList] = useState([]);

useEffect(()=>{
  axios
  .get(`${apiUrl}/videos`)
  .then(response => {
    setVideoList(response.data);
    const initVidId = response.data[0].id;
    return axios.get(`${apiUrl}/videos/${id||initVidId}`)
  })
  .then(response =>{
    const initVid  = response.data;
    setCurrentVideo(initVid);
  })
  .catch(err => {
    console.log("Error: ", err);
  });
},[])

useEffect(() => {
  axios.get(`${apiUrl}/videos/${id}?api_key=${apiKey}`)
  .then(response => {
    setCurrentVideo(response.data);
  }).catch(err => {
    console.log("Error: ", err);
  })
},[id]);

    return(
    <div className="homepage">
      <CurrentVideo currVideo={currentVideo}/>
      <div className="homepage__content">
      <div className="homepage__content-left">
      <Description currVideo={currentVideo}/>
      <Comments currComments={currentVideo.comments}/>
      </div>
      <div className="homepage__content-right">
      <VideoList videoList={videoList} doNotShow={currentVideo.id}/>
      </div>
      </div>
    </div>
    );
}

export default HomePage;