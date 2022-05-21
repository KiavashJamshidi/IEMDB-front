import React, { useEffect, useState } from 'react'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../Header/Header'
import MovieWatchlist from './MovieWatchlist';
import './Watchlist.css'
import '../Styles.css'
import MovieRec from './MovieRec';
import { API_URL } from '../EnvironmentVariables';
import { useNavigate } from 'react-router-dom';

function Watchlist(props) {
    let [movies, setMovies] = useState([]);
    let [recommendedMovies, setRecommendedMovies] = useState([]);
    const navigate = useNavigate();

    async function getWatchlist() {
        const url = `${API_URL}/watchlist`
        const resp = await axios.get(
            url,
            {'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}`}}
        );
        return resp.data;
    }

    async function getRecommendedMovies () {
        const url = `${API_URL}/recommendations`;
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
        getWatchlist()
            .then(c => {
                setMovies(c);
            })
            .catch(error => {
                if (error.response)
                    console.log(error.response.data);
                else
                    console.log(error);
                // if(error.response.status == 401)
                    navigate('/login');
            });

        getRecommendedMovies()
            .then(RM => {
                setRecommendedMovies(RM);
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
            <Header email="sina99.sn@gmail.com"/>

            <div className="container">
                <div className="row">


                    { movies.map(item => (

                        <MovieWatchlist  movie={item}/>

                    ))}

                    <div className="w-100"></div>

                    <div className="col" id="recommends">
                        <div className="info">
                            <div className="title-recommends">
                                <label>
                                    فیلم های پیشنهادی
                                </label>
                            </div>
                            <div className="films-recommended">
                            
                            { recommendedMovies.map(item => (

                                <MovieRec  movie={item} />

                            ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Watchlist
