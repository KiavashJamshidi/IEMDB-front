import 'bootstrap/dist/css/bootstrap.css';
import Header from '../Header/Header'
import MovieImage from '../Images/no-way-home.jpg';
import './MovieRec.css'
import '../Styles.css';
import { Link } from 'react-router-dom';

function MovieRec(props) {
    return (
        <div className="recommend-div-movie-rec">
            <Link to={"/movie/" + props.movie.Id}>
                <img src={props.movie.Image} alt="" className="image-film-watchlist"/>
                <div className="overlay-movie-rec">
                    {props.movie.Name}
                    <br/> {props.movie.IMDBRate}
                </div>
            </Link>
        </div>

    )
}

export default MovieRec
