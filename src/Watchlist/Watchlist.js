import React, { useEffect, useState } from 'react'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../Header/Header'
import MovieWatchlist from './MovieWatchlist';
import './Watchlist.css'
import '../Styles.css'
import MovieRec from './MovieRec';
import { API_URL } from '../EnviormentVariables';

function Watchlist(props) {
    let [movies, setMovies] = useState([]);

    async function getWatchlist(code, group) {
        const url = `${API_URL}/movies`
        const resp = await axios.get(
            url,
            // getAuthHeader()
        );
        console.log(resp.status);
        console.log(resp.data);

        return resp.data;
    }

    // useEffect(() => {
    //     getWatchlist()
    //         .then(c => {
    //             setMovies(c);
    //         })
    //         .catch(error => {
    //             if (error.response)
    //                 console.log(error.response.data);
    //             else
    //                 console.log(error);
    //         });
    //   }, []);
    
    return (
        <div>
            <Header email="sina99.sn@gmail.com"/>

            <div className="container">
                <div className="row">

                    <MovieWatchlist />

                    { movies.map( item => (

                        <MovieWatchlist movie={item}/>

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

                                <MovieRec />

                                <MovieRec />

                                <MovieRec />

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Watchlist
