import uploadIcon from '../../assets/images/icons/upload.svg'
import logo from '../../assets/images/BrainFlix-logo.svg'
import profile from '../../assets/images/Mohan-muruge.jpg'
import { NavLink } from 'react-router-dom';
import {Link} from "react-router-dom";
import './Header.scss';

const Header = () => {
    
return(
<header className="header">
    <Link to={`/`}><img src={logo} alt="b
    rainflix-logo" className="header__logo"/></Link>

<div className="header__search">
    <div className="header__search-bar"><input type="text" className="header__search-text" name="search" placeholder="Search" /></div>
    <NavLink className="header__upload-link" to="/upload">
        <button className="header__upload header__upload--row">
            <img src={uploadIcon} alt="upload-icon" className="header__upload-icon"/> UPLOAD
            </button>
    </NavLink>
    <img src={profile} className="header__profile" alt="profile-pic"/>

</div>

<button className="header__upload"><NavLink className="header__upload-link" to="/upload"><img src={uploadIcon} alt="upload-pic" className="header__upload-icon"/> UPLOAD</NavLink></button>

</header>
);
}

export default Header;