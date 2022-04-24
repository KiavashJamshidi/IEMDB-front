import React, { useEffect, useState } from 'react'
import axios from "axios";

import { GetUser } from '../App'
// import { useStateValue } from '../StateManager/StateProvider'
import './Movies.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles.css'
import MovieHeader from './Header/movieHeader';
import Movie from './Movie'
import { API_URL } from '../EnviormentVariables';

// import {Helmet} from "react-helmet";
// const Demo = props => (
// <div className="application">
//             <Helmet>
//             <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
//             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
//             </Helmet>
//         </div>
  
// );
function Movies() {
    let [movies, setMovies] = useState([]);
    let user;

    async function getMovies(code, group) {
        const url = `${API_URL}/movies`
        const resp = await axios.get(
            url,
            // getAuthHeader()
        );
        console.log(resp.status);
        console.log(resp.data);

        return resp.data;
    }

    useEffect(() => {
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
        
        <>

            <MovieHeader email="sina99.sn@gmail.com" />

            <div className="movies">
                <div className="redundant-div">
                </div>
                <div className="all-movies-div">
                    <div className="col-movie">

                        { movies.map( item => (

                        <Movie movie={item}/>

                        ) )}
                    </div>
                </div>
                <div className="orderByContent">
                    <label>:رتبه بندی بر اساس</label>
                    <div className="orderBy">

                        <div>
                            <button className="orderByBtn">تاریخ</button>
                        </div>
                        <div>
                            <button className="orderByBtn">IMDB امتیاز</button>
                        </div>
                    </div>
                </div>

            </div>
        </>
)
}

export default Movies