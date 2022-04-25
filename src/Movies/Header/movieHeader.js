import { Link, useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import logo from '../../Images/IEMDB.png'
import profile_icon from '../../Images/profile.jpg'
import './movieHeader.css'
import '../../Styles.css'
import { API_URL } from '../../EnviormentVariables';

function MovieHeader(props) {
    const [search, setSearch] = useState('');

    return (
        <div className="navbar" id="navigation">
        <Link to="/movies" className="navbar-brand">
            <img src={logo} alt="" width="60"/>
        </Link>
        <form className="searchDiv">
            <div className="dropdown">
                <button className="dropbtn">:جستجو بر اساس</button>
                <div className="dropdown-content">
                    <Link to={"/movies/searchMovieByName/" + search}>
                            نام
                    </Link>
                    <Link to="#">ژانر</Link>
                    <Link to="#">تاریخ تولید</Link>
                </div>
            </div>

            <div className="searchInput">
                <input type="text" placeholder=""
                    value={search} 
                    onChange={e => setSearch(e.target.value)}
                />
                <button type="submit" >
                    <img src="../../Images/search-logo.jpg" alt="" />
                    {/* <i className="fa fa-search"></i> */}
                </button>
            </div>
        </form>
        
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