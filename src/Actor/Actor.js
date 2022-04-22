import React, { useEffect } from 'react'
import { GetUser } from '../App'
import '../Styles.css';
import './Actor.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../Header/Header';
import tempPic from "../Images/no-way-home.jpg";
import ActorsMovies from './ActorsMovies';

// import {Helmet} from "react-helmet";
// const Demo = props => (
// <div className="application">
//             <Helmet>
//             <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
//             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
//             </Helmet>
//         </div>

// );
function Actor() {
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
                <div className="row">
                    <div className="col-md-3">
                        <img src="/Images/Tom-Holland.jpg" alt="" id="picture-actor"/>
                    </div>
                    <div className="col-md-9">
                        <div className="info" dir="rtl">
                            <div className="title-div">
                                <label>
                                    مشخصات بازیگر
                                </label>
                            </div>
                            <div className="info-actor">
                                <label>
                                    نام: Tom Holland
                                    <br/>
                                    تاریخ تولد: 1/06/1996
                                    <br/>
                                    ملیت: UK
                                    <br/>
                                    تعداد فیلم ها: 4
                                </label>
                            </div>
                            <div className="title-div">
                                <label>
                                    فیلم ها
                                </label>
                            </div>
                            <div className="films-played">
                                <ActorsMovies />
                                <ActorsMovies />
                                <ActorsMovies />
                            </div>
                            <br/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Actor