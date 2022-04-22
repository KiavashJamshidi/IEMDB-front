import { Link, useHistory } from 'react-router-dom';
import React, { useEffect } from 'react'
import logo from '../../Images/IEMDB.png'
import profile_icon from '../../Images/profile.jpg'
import './movieHeader.css'
import '../../Styles.css'

function MovieHeader(props) {

    return (
        <div className="navbar" id="navigation">
        <Link to="/movies" className="navbar-brand">
            <img src={logo} alt="" width="60"/>
        </Link>
        <div className="searchDiv">
            <div className="dropdown">
                <button className="dropbtn">:جستجو بر اساس</button>
                <div className="dropdown-content">
                    <Link to="#">نام</Link>
                    <Link to="#">ژانر</Link>
                    <Link to="#">تاریخ تولید</Link>
                </div>
            </div>

            <form className="searchInput">
                <input type="text" placeholder=""/>
                <button type="submit"><i className="fa fa-search"></i></button>
            </form>

        </div>
        <div className="profile-navbar">
            <div className="navbar-brand">
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

export default MovieHeader