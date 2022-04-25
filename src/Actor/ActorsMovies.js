import React, { useEffect } from 'react'
import './Actor.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles.css'
import MovieImage from '../Images/no-way-home.jpg'
import { Link } from 'react-router-dom';

function ActorsMovies(props) {
    return (
        <div className="film-div">
        <Link to="/Codes/Movie.html">
            <img src={MovieImage} alt="" className="image-film"/>
            <div className="overlay-actor-movies">
                Spider Man: No Way Home
                <br/> 8.3
            </div>
        </Link>
    </div>

    )
}

export default ActorsMovies
