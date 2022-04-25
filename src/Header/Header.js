import React, { useEffect } from 'react'
import './Header.css'
import 'bootstrap/dist/css/bootstrap.css';
import logo from '../Images/IEMDB.png'
import profile_icon from '../Images/profile.jpg'
import '../Styles.css'
import { Link } from 'react-router-dom';
import { API_URL } from '../EnvironmentVariables';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Header(props) {
    const navigate = useNavigate();
    const logout_user = (event) => {
        event.preventDefault();
        const url = `${API_URL}/logout`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
            })
        })
        .then(resp => resp.json())
        .catch(errors => console.log(errors));
        navigate("/login");
        // window.location.reload(false);
    }
    // async function logout_user() {
    //     const url = `${API_URL}/logout`;
    // const resp = await axios.post(
    //         url
    //     );
    //     return resp.data;
    // }



    return (
        
        <div className="navbar" id="navigation">
        <Link to="#" className="navbar-brand">
            <img src={logo} width="60" alt=""/>
        </Link>

        <div className="profile-navbar">
            <div to="#" className="navbar-brand">
                <div className="dropdown">
                    <img src={profile_icon} className="profile" alt="" width="60" />
                    <div className="dropdown-content">
                        {props.email}
                        <Link to="/watchlist">watch list</Link>
                        <Link to="/login">
                            <div onClick={(event) => logout_user(event)}>
                                logout
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
