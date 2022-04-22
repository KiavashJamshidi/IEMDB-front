import 'bootstrap/dist/css/bootstrap.css';
import Header from '../Header/Header'
import './MovieWatchlist.css'
import '../Styles.css'
import MovieImage from '../Images/The-Godfather.jpg';
import { Link } from 'react-router-dom';


function MovieWatchlist(props) {
    return (

        <div className="col">
            
            <div className="film-img-div">
                <Link to="/Codes/Movie.html">
                    <img src={MovieImage} alt="" className="film-img"/>
                </Link>
            </div>
            <div className="info">
                <div className="title-movie">
                    <div className="title-div-left">
                        <label>
                            The Godfather
                        </label>
                    </div>
                    <div className="title-div-right">
                        <Link to="#">
                            <img src="/Images/trash.png" alt="" className="trash"/>
                        </Link>
                    </div>
                </div>
                <div className="info-movie">
                    <div className="info-div">
                        <label dir="rtl" className="details-movie">
                            <b dir="rtl">امتیاز IMDB:</b>
                            9.2
                        <br/><br/>
                        <b>امتیاز کاربران:</b>
                            9.1
                        </label>
                    </div>
                    <div className="info-div">
                        <label dir="rtl" className="details-movie">
                            <b>کارگردان:</b>
                            Francis Ford Coppola
                            <br/>
                            <b>ژانر:</b>
                                جنایی، درام
                            <br/>
                            <b>تاریخ انتشار:</b>
                                1972/03/2
                            <br/>
                            <b>مدت زمان:</b>
                                175 دقیقه
                        </label>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MovieWatchlist
