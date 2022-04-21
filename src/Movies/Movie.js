import React, { useEffect } from 'react'
import './Movie.css'
import '../Styles.css'

function Movie(props) {
    return (
    <div class="movie">
        <a href="/Codes/Movie.html">
            <img src="/Images/home-coming.jpg" alt="" class="image-film"/>
            <div class="overlay">
                Spider Man: Homecoming
                <br/> 7.4
            </div>
        </a>
    </div>

    )
}

export default Movie