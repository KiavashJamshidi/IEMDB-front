import React, { useEffect, useState } from 'react';
import axios from "axios";
import Movie from './Movie'
import './Movies.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles.css';
import MovieHeader from './Header/movieHeader';
import { API_URL } from '../EnvironmentVariables';
import { useNavigate } from 'react-router-dom';

function Movies() {
    let [movies, setMovies] = useState([]);
    const navigate = useNavigate();

    async function getMovies() {
        const url = `${API_URL}/movies`
        const resp = await axios.get(
            url,
            {'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}`}}
        );
        return resp.data;
    }

    async function sortByImdbRate (){
        const url = `${API_URL}/movies/sortByImdbRate`;
        const resp = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',  'Authorization': `Bearer ${localStorage.getItem('token')}`},
            body: JSON.stringify({
            })
        })
        .then(resp => resp.json())
        .catch(errors => console.log(errors));
        setMovies(resp);
    }

    async function sortByReleaseDate() {
        const url = `${API_URL}/movies/sortByReleaseDate`;
        const resp = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',  'Authorization': `Bearer ${localStorage.getItem('token')}`},
            body: JSON.stringify({
            })
        })
        .then(resp => resp.json())
        .catch(errors => console.log(errors));
        setMovies(resp);
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
                // if(error.response.status == 401)
                    navigate('/login');
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