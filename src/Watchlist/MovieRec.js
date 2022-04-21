import 'bootstrap/dist/css/bootstrap.css';
import Header from '../Header/Header'
import MovieImage from '../Images/no-way-home.jpg';
import './MovieWatchlist.css'
import '../Styles.css';

function MovieRec(props) {
    return (
        <div class="recommend-div">
            <a href="/Codes/Movie.html">
                <img src={MovieImage} alt="" class="image-film"/>
                <div class="overlay">
                    Spider Man: No Way Home
                    <br/> 8.2
                </div>
            </a>
        </div>

    )
}

export default MovieRec
