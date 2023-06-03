import './CurrentVideo.scss';

const CurrentVideo = ({currVideo}) => {
    return (
        <div className="display">
            <video controls poster={currVideo.image} src={currVideo.video} className="display__curr-video"> 
            </video>
        </div>
       
    )
}

export default CurrentVideo;