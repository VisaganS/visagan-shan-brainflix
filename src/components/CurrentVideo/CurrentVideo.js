const CurrentVideo = ({currVideo}) => {
    return (
        <div class="display">
             <video poster={currVideo.image}></video> 
        </div>
       
    )
}

export default CurrentVideo;