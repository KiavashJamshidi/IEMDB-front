import React, { useEffect } from 'react'
import './Movies.css'
import '../Styles.css'
import { Link } from 'react-router-dom';

function Movie(props) {

    useEffect(() => { }, []);

    return (
    <div className="movie">
        <Link to={"/movie/" + props.movie.Id}>
            <img src={props.movie.Image} alt="" className="image-film"/>
            <div className="overlay-movie">
                {props.movie.name}
                <br/> {props.movie.IMDBRate}
            </div>
        </Link>
    </div>

    )
}

export default Movie