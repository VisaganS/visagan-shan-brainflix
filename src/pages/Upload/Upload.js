import uploadPreview from '../../assets/images/Upload-video-preview.jpg'
import publishIcon from '../../assets/images/icons/publish.svg'
import './Upload.scss';

const Upload = () => {

    return(
        <div className= "upload">
            <h1 className="upload__title">Upload Video</h1>
            <div className="upload__content">
            <form className="upload__form">
                <div className="upload__form-content">
                <label className="upload__label">VIDEO THUMBNAIL<img src={uploadPreview} className="upload__image" alt="upload-pic"/></label>
                <div className="upload__form-inputs">
                <label className="upload__label">TITLE YOUR VIDEO
                <input className="upload__input-title" name="input-title" type="text" placeholder='Add a title to your video'></input>
                </label>
                <label className="upload__label">ADD A VIDEO DESCRIPTION
                <textarea className="upload__input-desc" name="input-desc" type="text" placeholder='Add a description to your video'></textarea>
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