import React, { useEffect } from 'react'
import './Actor.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles.css'
import ActorImage from '../Images/Tom-Holland-crop.jpg'
import { Link } from 'react-router-dom';

function Actor(props) {
    return (
        <div className="cast-picture-div">
            <Link to={"/actor/" + props.actor.Id}>
                <img src={props.actor.Image} alt="" className="cast-img"/>
                <div className="overlay">
                    <br/>
                    <br/> {props.actor.Name}
                    <br/> Age: {props.actor.age}
                </div>
            </Link>
        </div>

    )
}

export default Actor