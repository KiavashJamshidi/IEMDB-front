import React, { useEffect } from 'react'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../Images/IEMDB.png'
import profile_icon from '../Images/profile.jpg'
import '../Styles.css'
import { Link } from 'react-router-dom';

function Header(props) {
    return (
        
        <div className="navbar" id="navigation">
        <Link to="#" className="navbar-brand">
            <img src={logo} width="60" alt=""/>
        </Link>

        <div className="profile-navbar">
            <div to="#" className="navbar-brand">
                <div className="dropdown">
                    <img src={profile_icon} className="profile" alt="" width="60"/>
                    <div className="dropdown-content">
                        <Link to="#">{props.email}</Link>
                        <Link to="#">watch list</Link>
                    </div>
                </div>
            </div>
        </div>

        </div>
    )
}

export default Header
