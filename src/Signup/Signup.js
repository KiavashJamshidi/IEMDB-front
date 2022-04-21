import React, { useEffect } from 'react'
import { GetUser } from '../App'
import './Signup.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles.css';
import Header from '../Header/Header';

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

        <body>
            <Header/>
            <div class="container">
                <div class="d-flex justify-content-center h-100">
                    <div class="card">
                        <div class="card-header">
                            <h3 class="register-text">ثبت نام</h3>
                        </div>
                        <div class="card-body" >
                            <form>
                                <div class="input-group form-group">
                                    <input type="text" class="form-control" placeholder="نام مستعار" dir="rtl"/>
                                </div>
                                <div class="input-group form-group">
                                    <input type="text" class="form-control" placeholder="نام" dir="rtl"/>
                                </div>
                                <div class="input-group form-group">
                                    <input type="text" class="form-control" placeholder="تاریخ تولد mm/dd/yyyy" dir="rtl"/>
                                </div>
                                <div class="input-group form-group">
                                    <input type="password" class="form-control" placeholder="رمز عبور" dir="rtl"/>
                                </div>
                                <div class="input-group form-group">
                                    <input type="password" class="form-control" placeholder="تکرار رمز عبور" dir="rtl"/>
                                </div>
                                <div class="input-group form-group">
                                    <input type="email" class="form-control" placeholder="ایمیل" dir="rtl"/>
                                </div>
                                <div class="input-group form-group">
                                    <input type="number" class="form-control" placeholder="سن" dir="rtl"/>
                                </div>
                                <div class="form-group">
                                    <button class="signup-button">ثبت نام</button>
                                </div>
                            </form>
                        </div>
                        <div class="card-footer">
                            <div class="d-flex justify-content-center links">
                                <a href="#">ورود </a> قبلا ثبت نام کرده اید؟
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default Signup