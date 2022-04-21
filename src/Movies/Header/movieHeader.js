import React, { useEffect } from 'react'
import logo from '../../Images/IEMDB.png'
import profile_icon from '../../Images/profile.jpg'
import './movieHeader.css'
import '../../Styles.css'

function MovieHeader(props) {
    return (
        <div class="navbar" id="navigation">
        <a class="navbar-brand">
            <img src={logo} alt="" width="60"/>
        </a>
        <div class="searchDiv">
            <div class="dropdown">
                <button class="dropbtn">:جستجو بر اساس</button>
                <div class="dropdown-content">
                    <a href="#">نام</a>
                    <a href="#">ژانر</a>
                    <a href="#">تاریخ تولید</a>
                </div>
            </div>

            <form class="searchInput">
                <input type="text" placeholder=""/>
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>

        </div>
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

export default MovieHeader