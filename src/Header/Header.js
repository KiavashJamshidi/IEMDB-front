import React, { useEffect } from 'react'
import './Header.css'
import '../Styles.css'
import 'bootstrap/dist/css/bootstrap.css';

function Header(props) {
    return (
        
        <div class="navbar" id="navigation">
        <a class="navbar-brand">
            <img src="/Images/IEMDB.png" width="60" alt=""/>
        </a>

        <div class="profile-navbar">
            <a class="navbar-brand">
                <div class="dropdown">
                    <img src="/Images/profile.jpg" class="profile" alt="" width="60"/>
                    <div class="dropdown-content">
                        <a href="#">salehi@gmail.com</a>
                        <a href="#">watch list</a>
                    </div>
                </div>
            </a>
        </div>

        </div>
    )
}

export default Header
