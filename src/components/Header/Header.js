import './Header.scss';
import logo from '../../assets/images/BrainFlix-logo.svg'
import profile from '../../assets/images/Mohan-muruge.jpg'
import uploadIcon from '../../assets/images/icons/upload.svg'
const Header = () => {
    
return(
<header className="header">
<img src={logo} alt="brainflix-logo" className="header__logo"/>

<div className="header__search">
    <div className="header__search-bar">
    <input type="text" className="header__search-text" name="search" placeholder="Search" /></div>
    <img src={profile} className="header__profile" alt="profile-pic"/>
</div>

<button className="header__upload"><img src={uploadIcon} alt="upload-image" className="header__upload-icon"/> UPLOAD</button>
</header>
);
}

export default Header;