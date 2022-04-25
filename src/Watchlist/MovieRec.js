import 'bootstrap/dist/css/bootstrap.css';
import Header from '../Header/Header'
import MovieImage from '../Images/no-way-home.jpg';
import './MovieWatchlist.css'
import '../Styles.css';
import { Link } from 'react-router-dom';

function MovieRec(props) {
    return (
        <div className="recommend-div">
            <Link to={"/movie/" + props.movie.Id}>
                <img src={props.movie.Image} alt="" className="image-film"/>
                <div className="MovieRecOverlay">
                    {props.movie.Name}
                    <br/> {props.movie.IMDBRate}
                </div>
            </Link>
        </div>

    )
}

export default MovieRec
