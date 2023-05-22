import './VideoTile.scss'
const VideoTile = ({video, handleVideoChange}) => {
    return (
        <div className="video-tile" onClick={() => handleVideoChange(video.id)}>
            <img className="video-tile__thumbnail" src={video.image}/>
            <div className="video-tile__text">
                <div className="video-tile__desc video-tile__desc--bold">{video.title}</div>
                <div className="video-tile__desc">{video.channel}</div>
            </div>
        </div>
    );
}

export default VideoTile;