import React, { useEffect } from 'react'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../Images/IEMDB.png'
import profile_icon from '../Images/profile.jpg'
import '../Styles.css'

function Header(props) {
    return (
        
        <div class="navbar" id="navigation">
        <a class="navbar-brand">
            <img src={logo} width="60" alt=""/>
        </a>

        <div class="profile-navbar">
            <a class="navbar-brand">
                <div class="dropdown">
                    <img src={profile_icon} class="profile" alt="" width="60"/>
                    <div class="dropdown-content">
                        <a href="#">{props.email}</a>
                        <a href="#">watch list</a>
                    </div>
                </div>
            </a>
        </div>

        </div>
    )
}

export default Header
