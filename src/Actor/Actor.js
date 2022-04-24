import React, { useEffect, useState } from 'react'
import { GetUser } from '../App'
import '../Styles.css';
import './Actor.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../Header/Header';
import tempPic from "../Images/no-way-home.jpg";
import ActorsMovies from './ActorsMovies';
import { useParams } from 'react-router-dom';
import { API_URL } from '../EnviormentVariables';
import axios from "axios";
import { act } from 'react-dom/test-utils';

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

    const { actorId } = useParams();

    let [actor, setActor] = useState([]);

    async function getActor(code, group) {
        const url = `${API_URL}/actors/${actorId}`
        const resp = await axios.get(
            url,
            // getAuthHeader()
        );
        console.log(resp.status);
        console.log(resp.data);

        return resp.data;
    }

    useEffect(() => {
        getActor()
            .then(c => {
                setActor(c);
            })
            .catch(error => {
                if (error.response)
                    console.log(error.response.data);
                else
                    console.log(error);
            });
      }, []);    


    return (

        <div>
            <Header/>

            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <img src={actor.Image} alt="" id="picture-actor"/>
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
                                    نام: {actor.Name}
                                    <br/>
                                    تاریخ تولد: {actor.BirthDate}
                                    <br/>
                                    ملیت: {actor.Nationality}
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