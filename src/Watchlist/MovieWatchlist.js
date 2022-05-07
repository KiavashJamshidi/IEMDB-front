import 'bootstrap/dist/css/bootstrap.css';
import Header from '../Header/Header'
import './MovieWatchlist.css'
import '../Styles.css'
import trashIMage from '../Images/trash.png';
import { Link } from 'react-router-dom';
import { API_URL } from '../EnvironmentVariables';

function MovieWatchlist(props) {
    let [genres, setGenres] = useState([]);

    const deleteMovie = (event, movieId) => {
        event.preventDefault();
        const url = `${API_URL}/watchlist/${movieId}/remove`;
        fetch(url, {
            method: 'POST'
        })
        .then(resp => resp.json())
        .catch(errors => console.log(errors));
        window.location.reload(false);
    }

    async function getGenres(movieId){
        const url = `${API_URL}/movies/${movieId}/genres`;
        const resp = await axios.post(
            url
        );
        setGenres(resp.data);
    }


    return (

        <div className="col">
            
            <div className="film-img-div">
                <Link to={"/movie/" + props.movie.Id}>
                    <img src={props.movie.Image} alt="" className="film-img"/>
                </Link>
            </div>
            <div className="info">
                <div className="title-movie">
                    <div className="title-div-left">
                        <label>
                            {props.movie.Name}
                        </label>
                    </div>
                    <div className="title-div-right">
                        <img src={trashIMage} alt="" className="trash" onClick={(event) => deleteMovie(event, props.movie.Id)}/>
                    </div>
                </div>
                <div className="info-movie">
                    <div className="info-div">
                        <label dir="rtl" className="details-movie">
                            <b dir="rtl">امتیاز IMDB:</b>
                            {props.movie.IMDBRate}
                        <br/><br/>
                        <b>امتیاز کاربران:</b>
                            {(props.movie.Score != null)?props.movie.Score:0}
                        </label>
                    </div>
                    <div className="info-div">
                        <label dir="rtl" className="details-movie">
                            <b>کارگردان:</b>
                            { props.movie.director}
                            <br/>
                            <b>ژانر:</b>
                                {props.movie.genres}
                            <br/>
                            <b>تاریخ انتشار:</b>
                            {props.movie.ReleaseDate}
                            <br/>
                            <b>مدت زمان:</b>
                                {props.movie.Duration} دقیقه
                        </label>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MovieWatchlist
