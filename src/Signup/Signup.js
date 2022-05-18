import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form";
import { GetUser } from '../App'
import './Signup.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import { API_URL } from '../EnvironmentVariables';
import { useNavigate } from 'react-router-dom';


function Signup() {
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm({mode: 'onBlur'});
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [password, setPassword] = useState('');
    const [Rpassword, setRPassword] = useState('');

    const signup_user = (event, name, email, password, username, birthDate) => {
        event.preventDefault();
        const url = `${API_URL}/signup`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "name" : name,
                "username" : username,
                "birthDate" : birthDate,
                "email" : email,
                "password" : password
            })
        })
        .then(resp => resp.json())
        .then(res => console.log(res))
        .catch(errors => console.log(errors));
        navigate('/movies');
    }


    return (

        <div>
            <Header/>
            <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="register-text">ثبت نام</h3>
                        </div>
                        <div className="card-body" >
                            <form>
                                <div className="input-group form-group">
                                    {errors.name && <span style={{color: 'red'}}>   !فیلد نمی‌تواند خالی باشد  </span>}
                                    <input {...register('name', {required: true})} name='name' placeholder='نام' className="form-control" type="text"  dir="rtl"
                                        value = {name} 
                                        onChange = {e => setName(e.target.value)}/>
                                </div>
                                <div className="input-group form-group">
                                    {errors.username && <span style={{color: 'red'}}>   !فیلد نمی‌تواند خالی باشد  </span>}
                                    <input {...register('username', {required: true})} name='username' placeholder='نام کاربری' className="form-control" type="text"  dir="rtl"
                                        value = {username} 
                                        onChange = {e => setUsername(e.target.value)}/>
                                </div>
                                <div className="input-group form-group">
                                    {errors.birthDate && <span style={{color: 'red'}}>   !تاریخ درست وارد نشده است  </span>}
                                    <input {...register('birthDate', {required: true, pattern: {value: /13[0-9][0-9]-(0[1-9]|(10|11|12))-(0[1-9]|[1-2][0-9]|30|31)/i, message: 'Invalid date'}})} name='birthDate' placeholder='تاریخ تولد' className="form-control" type="text"  
                                        value = {birthDate} 
                                        onChange = {e => setBirthDate(e.target.value)}/>
                                </div>
                                <div className="input-group form-group">
                                    {errors.email && <span style={{color: 'red'}}>   !فیلد نمی‌تواند خالی باشد  </span>}
                                    <input {...register('email', {required: true})} name='email' placeholder='ایمیل' className="form-control" type="email"  dir="rtl"
                                        value = {email} 
                                        onChange = {e => setEmail(e.target.value)}/>
                                </div>
                                <div className="input-group form-group">
                                    {errors.password && <span style={{color: 'red'}}>   !فیلد نمی‌تواند خالی باشد  </span>}
                                    <input {...register('password', {required: true})} name='password' placeholder='رمز عبور' className="form-control" type="password"  dir="rtl"
                                        value = {password} 
                                        onChange = {e => setPassword(e.target.value)}/>
                                </div>
                                <div className="input-group form-group">
                                    {password!=Rpassword && <span style={{color: 'red'}}>   passwords do not match! </span>}
                                    {errors.RepeatPassword && <span style={{color: 'red'}}>   !فیلد نمی‌تواند خالی باشد  </span>}
                                    <input {...register('RepeatPassword', {required: true})} name='RepeatPassword' placeholder='تکرار رمز عبور' className="form-control" type="password"  dir="rtl" 
                                        value = {Rpassword} 
                                        onChange = {e => setRPassword(e.target.value)}/>

                                </div>
                                <div className="form-group">
                                    <button className="signup-button" onClick={(event) => signup_user(event, name, email, password, username, birthDate)}>ثبت نام</button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                <Link to="/login">ورود </Link> قبلا ثبت نام کرده اید؟
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

export default Signup