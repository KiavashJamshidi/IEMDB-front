import React, { useEffect } from 'react'
import './Movie.css'
import '../Styles.css'
import { Link } from 'react-router-dom';

function Movie(props) {
    return (
    <div className="movie">
        <Link to="/Codes/Movie.html">
            <img src="/Images/home-coming.jpg" alt="" className="image-film"/>
            <div className="overlay">
                {props.MovieName}
                <br/> 7.4
            </div>
        </Link>
    </div>

    )
}

export default Movie