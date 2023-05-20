
const VideoTile = ({vid, onVideoCick}) => {
    return (
        <div onClick={onVideoCick(vid.id)}>
            <video poster={vid.image} />
        </div>
    );
}

export default VideoTile;