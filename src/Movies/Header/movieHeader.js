import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import logo from '../../Images/IEMDB.png'
import profile_icon from '../../Images/profile.jpg'
import './movieHeader.css'
import '../../Styles.css'
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../EnvironmentVariables';

function MovieHeader(props) {
    const [search, setSearch] = useState('');
    let [user, setUser] = useState([]);

    const navigate = useNavigate();

    const logout_user = (event) => {
        event.preventDefault();
        const url = `${API_URL}/logout`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',  'Authorization': `Bearer ${localStorage.getItem('token')}`},
        })
        .then(resp => resp.json())
        .catch(errors => console.log(errors));
        localStorage.setItem('token', null);
        localStorage.setItem('userEmail', null);

        navigate("/login");
    }

    const findUser = () => {
        const url = `${API_URL}/user`;
        return fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',  'Authorization': `Bearer ${localStorage.getItem('token')}`},
            body: JSON.stringify({
            })
        })
        .then(resp => resp.json())
        .catch(errors => console.log(errors));
    }

    useEffect(() => {
        findUser()
            .then(u => {
                setUser(u);
            })
            .catch(error => {
                if (error.response)
                    console.log(error.response.data);
                else
                    console.log(error);
            });
      }, []); 

    return (
        <div className="navbar" id="navigation">
        <Link to="/movies" className="navbar-brand">
            <img src={logo} alt="" width="60"/>
        </Link>
        <form className="searchDiv">
            <div className="dropdown">
                <button className="dropbtn-header">:جستجو بر اساس</button>
                <div className="dropdown-content">
                    <Link to={"/movies/searchMovieByName/" + search}>
                        نام
                    </Link>
                    <Link to={"/movies/searchMovieByGenre/" + search}>
                        ژانر
                    </Link>
                    <Link to={"/movies/searchMovieByDate/" + search}>
                        تاریخ تولید
                    </Link>
                </div>
            </div>

            <div className="searchInput">
                <input type="text" placeholder=""
                    value={search} 
                    onChange={e => setSearch(e.target.value)}
                />
            </div>
        </form>
        
        <div className="profile-navbar">
            <div className="navbar-brand">
                <div className="dropdown">
                    <img src={profile_icon} className="profile" alt="" width="60"/>
                    <div className="dropdown-content">
                        {user?.Email}
                        {/* {localStorage.getItem('userEmail')!=null ? localStorage.getItem('userEmail') : ''} */}
                        <Link to="/watchlist">watch list</Link>
                        <Link to="/login">
                            <div onClick={(event) => logout_user(event)}>
                                {user.Id != undefined? 'logout' : 'login'} 
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    </div>

    )
}

export default MovieHeader