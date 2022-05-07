import React, { useEffect, useState } from 'react';
import axios from "axios";
import { GetUser } from '../App';
import Movie from './Movie'
import './Movies.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles.css';
import MovieHeader from './Header/movieHeader';
import { API_URL } from '../EnvironmentVariables';

function Movies() {
    let [movies, setMovies] = useState([]);
    let user;

    async function getMovies(code, group) {
        const url = `${API_URL}/movies`
        const resp = await axios.get(
            url,
        );
        return resp.data;
    }

    async function sortByImdbRate (){
        const url = `${API_URL}/movies/sortByImdbRate`;
        const resp = await axios.post(
            url
        );
        setMovies(resp.data);
    }

    async function sortByReleaseDate() {
        const url = `${API_URL}/movies/sortByReleaseDate`;
        const resp = await axios.post(
            url
        );
        setMovies(resp.data);
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
        <div>
            <MovieHeader email="sina99.sn@gmail.com" />

            <div className="movies">
                <div className="redundant-div"></div>
                <div className="all-movies-div">
                    <div className="col-movie">
                        { movies.map( item => ( <Movie movie={item}/> ))}
                    </div>
                </div>
                <div className="orderByContent">
                    <label>:رتبه بندی بر اساس</label>
                    <div className="orderBy">
                        <div>
                            <button className="orderByBtn" onClick={(event) => sortByReleaseDate(event)}>تاریخ</button>
                        </div>
                        <div>
                            <button className="orderByBtn" onClick={(event) => sortByImdbRate(event)}>IMDB امتیاز</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)}

export default Movies