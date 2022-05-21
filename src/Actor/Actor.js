import React, { useEffect, useState } from 'react'
import '../Styles.css';
import './Actor.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../Header/Header';
import ActorsMovies from './ActorsMovies';
import { useParams } from 'react-router-dom';
import { API_URL } from '../EnvironmentVariables';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Actor() {
    let [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    const { actorId } = useParams();

    let [actor, setActor] = useState([]);

    async function getActor() {
        const url = `${API_URL}/actors/${actorId}`
        const resp = await axios.get(
            url,
            {'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}`}}
        );
        return resp.data;
    }

    async function getMovies() {
        const url = `${API_URL}/actors/${actorId}/moviesActed`
        const resp = fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',  'Authorization': `Bearer ${localStorage.getItem('token')}`},
            body: JSON.stringify({
            })
        })
        .then(resp => resp.json())
        .catch(errors => console.log(errors));
        return resp;
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
                // if(error.response.status == 401 || )
                    navigate('/login');
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