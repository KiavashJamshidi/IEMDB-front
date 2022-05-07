import React, { useEffect, useState } from 'react'
import { GetUser } from '../App'
import '../Styles.css';
import './Actor.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../Header/Header';
import tempPic from "../Images/no-way-home.jpg";
import ActorsMovies from './ActorsMovies';
import { useParams } from 'react-router-dom';
import { API_URL } from '../EnvironmentVariables';
import axios from "axios";
import { act } from 'react-dom/test-utils';

function Actor() {
    let [movies, setMovies] = useState([]);

    let user;

    const { actorId } = useParams();

    let [actor, setActor] = useState([]);

    async function getActor(code, group) {
        const url = `${API_URL}/actors/${actorId}`
        const resp = await axios.get(
            url
        );
        return resp.data;
    }

    async function getMovies(code, group) {
        const url = `${API_URL}/actors/${actorId}/moviesActed`
        const resp = await axios.post(
            url,
            // getAuthHeader()
        );
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

            getMovies()
                .then(c => {
                    setMovies(c);
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
                                    تعداد فیلم ها: {movies.length}
                                </label>
                            </div>
                            <div className="title-div">
                                <label>
                                    فیلم ها
                                </label>
                            </div>
                            <div className="films-played">

                                { movies.map( item => (

                                    <ActorsMovies movie={item}/>

                                ) )}

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