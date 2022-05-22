import React, { useEffect, useState } from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles.css';
import Header from '../Header/Header';
import profileLogin from '../Images/proflie-login.png';
import password from '../Images/password.jpg';
import { Link } from 'react-router-dom';
import { API_URL } from '../EnvironmentVariables';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    async function login_user (event, email, password) {
        event.preventDefault();
        const url = `${API_URL}/login`;
        const resp = await axios.post(
            url,
            {'email': email, 'password': password},
            {'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}`}}
        );
        localStorage.setItem('token', resp.data.token);
        localStorage.setItem('userEmail', resp.data.userEmail);
        navigate('/');
        // return resp.data;
    }

    useEffect(() => {
        if(localStorage.getItem('token') !== 'null')
            navigate('/');
        }
    , []);    


    return (

        <div>
            <Header/>
            <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="register-text">ورود</h3>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="input-group form-group">
                                    <input type="text" className="form-control" placeholder="نام کاربری" dir="rtl" 
                                        value = {email} 
                                        onChange = {e => setEmail(e.target.value)}/>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><img src={profileLogin} alt="" className="icon-image"/></span>
                                    </div>

                                </div>
                                <div className="input-group form-group">
                                    <input type="password" className="form-control" placeholder="رمز عبور" dir="rtl" 
                                        value = {pass} 
                                        onChange = {e => setPass(e.target.value)}/>
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><img src={password} alt="" className="icon-image"/> </span>
                                    </div>
                                </div>
                                <div className="row align-items-center remember">
                                    <input type="checkbox"/>من را به خاطر بسپار
                                </div>
                                <div className="form-group">
                                    <button className="login-button"  onClick={(event) => login_user(event, email, pass)}>ورود</button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                <Link to="/signup">ثبت نام</Link> حساب کاربری ندارید؟
                            </div>
                            <div className="d-flex justify-content-center links">
                                <a href="https://github.com/login/oauth/authorize?client_id=4a4cc2f558b4c85a843b&scope=user"> Github </a> ورود با 
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login