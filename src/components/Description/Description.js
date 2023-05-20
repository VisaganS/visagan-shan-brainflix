import './Description.scss'
import viewIcon from '../../assets/images/icons/views.svg'
import likesIcon from '../../assets/images/icons/likes.svg'
const Description = ({currVideo}) => {

const {title, channel, views, timestamp, likes, description} = currVideo;

const formattedDate = new Date(timestamp).toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
});

return(
    <div className="description">
        <div className="description__title">{title}</div>
        <div className="description__details">
            <div className="description__container">
            <div className="description__info"><p className="description__info-text description__info-text--bold">By {channel}</p></div>
            <div className="description__info"><p className="description__info-text">{formattedDate}</p></div>
            </div>
            <div className="description__container">
            <div className="description__info"><img src={viewIcon} className="description__icon"/><p className="description__info-text">{views}</p></div>
            <div className="description__info"><img src={likesIcon} className="description__icon"/><p className="description__info-text">{likes}</p></div>
            </div>
        </div>
        <div className="description__video">
            <p>{description}</p>
        </div>
    </div>
);

}

export default Description;