import React, { useEffect } from 'react'
import './Actor.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles.css'
import MovieImage from '../Images/no-way-home.jpg'
import { Link } from 'react-router-dom';
import { API_URL } from '../EnviormentVariables';

function ActorsMovies(props) {
    const getMoviesOfActor = (event, actorId, text) => {
        event.preventDefault();
        const url = `${API_URL}/actors/${actorId}/moviesActed`;
        fetch(url, {
            method: 'POST',
        })
        .then(resp => resp.json())
        .catch(errors => console.log(errors));
        window.location.reload(false);
    }


    return (
        <div className="film-div">
        <Link to={"/movie/" + props.movie.Id}>
            <img src={props.movie.Image} alt="" className="image-film-actor"/>
            <div className="overlay-actor-movies">
                {props.movie.Name}
                <br/> {props.movie.IMDBRate}
            </div>
        </Link>
    </div>

    )
}

export default ActorsMovies
