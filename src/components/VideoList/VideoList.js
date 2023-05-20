import VideoTile from '../VideoTile/VideoTile'
const VideoList = ({vidList, doNotShow, onVideoChange}) => {
    return (
        <div>
            {vidList.map((data) => {
                if (data.id !== doNotShow.id) {
                    return <VideoTile vid={data} onVideoCick={onVideoChange} />
                } 
                return;
            })}
        </div>
    );
}

export default VideoList;