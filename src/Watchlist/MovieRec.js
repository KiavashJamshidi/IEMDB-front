import 'bootstrap/dist/css/bootstrap.css';
import Header from '../Header/Header'
import MovieImage from '../Images/no-way-home.jpg';
import './MovieWatchlist.css'
import '../Styles.css';
import { Link } from 'react-router-dom';

function MovieRec(props) {
    return (
        <div className="recommend-div">
            <Link to="/Codes/Movie.html">
                <img src={MovieImage} alt="" className="image-film"/>
                <div className="overlay">
                    Spider Man: No Way Home
                    <br/> 8.2
                </div>
            </Link>
        </div>

    )
}

export default MovieRec
