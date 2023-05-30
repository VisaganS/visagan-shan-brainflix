import './VideoList.scss'
import VideoTile from '../VideoTile/VideoTile'

const VideoList = ({videoList, doNotShow}) => {

    return (
        <div className="video-list">
            <div className="video-list__heading">NEXT VIDEOS</div>
            <div className="video-list__tiles">
            {videoList.map((video) => {
                if (video.id !== doNotShow) {
                    return <VideoTile key={video.id} video={video}/>
                } 
                return null;
            })}
            </div>
        </div> 
    );
}

export default VideoList;