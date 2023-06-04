import './VideoTile.scss'
import {Link} from "react-router-dom";

const VideoTile = ({video}) => {
    return ( 
    <Link to={`/videos/${video.id}`}>
        <div className="video-tile">
           <img className="video-tile__thumbnail" alt="video-tile-thumbnail" src={video.image}/>
            <div className="video-tile__text">
                <div className="video-tile__desc video-tile__desc--bold">{video.title}</div>
                <div className="video-tile__desc">{video.channel}</div>
            </div>
        </div>
    </Link>
    );
}

export default VideoTile;