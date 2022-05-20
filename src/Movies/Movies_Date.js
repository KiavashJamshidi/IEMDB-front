import React, { useEffect, useState } from 'react'
import axios from "axios";

import './Movies.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles.css';
import MovieHeader from './Header/movieHeader';
import Movie from './Movie'
import { API_URL } from '../EnvironmentVariables';
import { useParams } from 'react-router-dom';


function Movies_Name() {
    let [movies, setMovies] = useState([]);

    const { search } = useParams();

    async function getMovies() {
        const url = `${API_URL}/movies/searchByDate/${search}`
        const resp = await axios.get(
            url
        );
        return resp.data;
    }

    const sortByImdbRate = (event) => {
        event.preventDefault();
        const url = `${API_URL}/movies/sortByImdbRate`;
        fetch(url, {
            method: 'POST',
        })
        .then(resp => resp.json())
        .catch(errors => console.log(errors));
        window.location.reload(false);
    }

    const sortByReleaseDate = (event) => {
        event.preventDefault();
        const url = `${API_URL}/movies/sortByReleaseDate`;
        fetch(url, {
            method: 'POST',
        })
        .then(resp => resp.json())
        .catch(errors => console.log(errors));
        window.location.reload(false);
    }

    useEffect(() => {
        getMovies()
            .then(c => { setMovies(c); })
            .catch(error => {
                if (error.response) console.log(error.response.data);
                else console.log(error);
            });
      }, [search]);    
    
    return (
        <div>
            <MovieHeader email="sina99.sn@gmail.com" />

            <div className="movies">
                <div className="redundant-div"></div>
                <div className="all-movies-div">
                    <div className="col-movie">
                        { movies.map( item => ( <Movie movie={item}/>)) }
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

export default Movies_Name