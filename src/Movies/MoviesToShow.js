import React, { useEffect } from 'react';
import './Movie.css';
import '../Styles.css';
import { Link } from 'react-router-dom';
import Movie from './Movie'

function MoviesToShow(props) {

    useEffect(() => { }, []);

    return (
    
    <div className="all-movies-div">
        <div className="col-movie">
            { props.movies.map( item => ( <Movie movie={item}/> ))}
        </div>
    </div>

    )
}

export default MoviesToShow