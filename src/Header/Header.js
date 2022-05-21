import React, { useEffect, useState } from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../Images/IEMDB.png';
import profile_icon from '../Images/profile.jpg';
import '../Styles.css';
import { Link } from 'react-router-dom';
import { API_URL } from '../EnvironmentVariables';
import { useNavigate } from 'react-router-dom';

function Header(props) {
    let [user, setUser] = useState([]);
    const navigate = useNavigate();

    async function logout_user (event) {
        event.preventDefault();
        const url = `${API_URL}/logout`;
        const resp = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            })
        })
        .then(resp => resp.json())
        .catch(errors => console.log(errors));
        localStorage.setItem('token', null);
        localStorage.setItem('userEmail', null);
        // navigate("/login");
        window.location.reload(false);

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
            <img src={logo} width="60" alt=""/>
        </Link>

        <div className="profile-navbar">
            <div to="#" className="navbar-brand">
                <div className="dropdown">
                    <img src={profile_icon} className="profile" alt="" width="60" />
                    <div className="dropdown-content">
                        <div>{user?.Email}</div>
                        <Link to="/watchlist">watch list</Link>
                        <Link to="/login">
                            <div onClick={(event) => logout_user(event)}>
                            {console.log("user is")}
                                {console.log(user)}
                                {user? 'logout' : 'login'} 
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

        </div>
    )
}

export default Header
