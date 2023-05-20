import './CurrentVideo.scss';
import playIcon from '../../assets/images/icons/play.svg'

const CurrentVideo = ({currVideo}) => {
    return (
        <div className="display">
            <video controls poster={currVideo.image} className="display__image">
            <source/> 
            </video>
        </div>
       
    )
}

export default CurrentVideo;