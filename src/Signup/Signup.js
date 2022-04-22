import React, { useEffect } from 'react'
import { GetUser } from '../App'
import './Signup.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles.css';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

// import {Helmet} from "react-helmet";
// const Demo = props => (
// <div className="application">
//             <Helmet>
//             <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
//             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
//             </Helmet>
//         </div>

// );
function Signup() {
    // const [state, dispatch] = useStateValue()
    let user;

    // useEffect( async () => {
    //     user = await GetUser(state);
    //     await dispatch({
    //         type: 'SET_USER_INFO',
    //         user: user
    //     });
    // }, [] )


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
                                    <input type="text" className="form-control" placeholder="نام مستعار" dir="rtl"/>
                                </div>
                                <div className="input-group form-group">
                                    <input type="text" className="form-control" placeholder="نام" dir="rtl"/>
                                </div>
                                <div className="input-group form-group">
                                    <input type="text" className="form-control" placeholder="تاریخ تولد mm/dd/yyyy" dir="rtl"/>
                                </div>
                                <div className="input-group form-group">
                                    <input type="password" className="form-control" placeholder="رمز عبور" dir="rtl"/>
                                </div>
                                <div className="input-group form-group">
                                    <input type="password" className="form-control" placeholder="تکرار رمز عبور" dir="rtl"/>
                                </div>
                                <div className="input-group form-group">
                                    <input type="email" className="form-control" placeholder="ایمیل" dir="rtl"/>
                                </div>
                                <div className="form-group">
                                    <button className="signup-button">ثبت نام</button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                <Link to="#">ورود </Link> قبلا ثبت نام کرده اید؟
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup