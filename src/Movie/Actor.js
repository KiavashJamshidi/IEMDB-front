import React, { useEffect } from 'react'
import './Actor.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles.css'
import ActorImage from '../Images/Tom-Holland-crop.jpg'
function Actor(props) {
    return (
        <div class="cast-picture-div">
        <img src={ActorImage} alt="" class="cast-img"/>
        <div class="overlay">
            <br/>
            <br/> Tom Holland
            <br/> Age: 25
        </div>
        </div>

    )
}

export default Actor
