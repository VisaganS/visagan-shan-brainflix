import { useNavigate } from 'react-router-dom'
import uploadPreview from '../../assets/images/Upload-video-preview.jpg'
import publishIcon from '../../assets/images/icons/publish.svg'
import './Upload.scss';
import axios from 'axios';

const Upload = () => {
const navigate = useNavigate();

const handleSubmit = (event) => {
    event.preventDefault();
    let data = {
        title: event.target.title.value,
        channel: "The Brainy Boys",
        description: event.target.desc.value,
        views: "3,092,284",
        likes: "75,985",
        duration: "4:20",
        video: "https://project-2-api.herokuapp.com/stream",
        timestamp: 1632344461000,
        comments: [
          {
            id: "2d818087-c1f4-4ec2-bcdc-b545fd6ec298",
            name: "Will Smith",
            comment: "Amazing man, just great. Just keep my wife's name out your mouth.",
            likes: 1,
            timestamp: 1632512763000
          },
          {
            id: "191de346-b3c2-47b4-bf5b-6db90d1e3bqz",
            name: "Thanos",
            comment: "Video was so good that I accidently snapped my fingers.",
            likes: 0,
            timestamp: 1632496261000
          }
        ] 
    }

    axios.
    post('http://localhost:8080/videos', data)
    .then(response => {
        console.log(response.data);
        navigate('/');
    })
    .catch(err => {
        console.log(err);
        navigate('/');
    })
}

    return(
        <div className= "upload">
            <h1 className="upload__title">Upload Video</h1>
            <div className="upload__content">
            <form className="upload__form" onSubmit={handleSubmit}>
                <div className="upload__form-content">
                <label className="upload__label">VIDEO THUMBNAIL<img src={uploadPreview} className="upload__image" alt="upload-pic"/></label>
                <div className="upload__form-inputs">
                <label className="upload__label">TITLE YOUR VIDEO
                <input className="upload__input-title" name="title" type="text" placeholder='Add a title to your video'></input>
                </label>
                <label className="upload__label">ADD A VIDEO DESCRIPTION
                <textarea className="upload__input-desc" name="desc" type="text" placeholder='Add a description to your video'></textarea>
                </label>
                </div>
                </div>
                <div className="upload__button-container">
                    <button type="submit" className="upload__button"><img src={publishIcon} className="upload__icon" alt="upload-icon"/>PUBLISH</button>
                    <button type="submit" className="upload__button upload__button--white">CANCEL</button>
                </div>
            </form>
            </div>
        </div>
    );
}

export default Upload;