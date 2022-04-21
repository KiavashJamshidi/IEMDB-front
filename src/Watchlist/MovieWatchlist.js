import 'bootstrap/dist/css/bootstrap.css';
import Header from '../Header/Header'
import './MovieWatchlist.css'
import '../Styles.css'
import MovieImage from '../Images/The-Godfather.jpg';


function MovieWatchlist(props) {
    return (

        <div class="col">
            
            <div class="film-img-div">
                <a href="/Codes/Movie.html">
                    <img src={MovieImage} alt="" class="film-img"/>
                </a>
            </div>
            <div class="info">
                <div class="title-movie">
                    <div class="title-div-left">
                        <label>
                            The Godfather
                        </label>
                    </div>
                    <div class="title-div-right">
                        <a href="#">
                            <img src="/Images/trash.png" alt="" class="trash"/>
                        </a>
                    </div>
                </div>
                <div class="info-movie">
                    <div class="info-div">
                        <label dir="rtl" class="details-movie">
                            <b dir="rtl">امتیاز IMDB:</b>
                            9.2
                        <br/><br/>
                        <b>امتیاز کاربران:</b>
                            9.1
                        </label>
                    </div>
                    <div class="info-div">
                        <label dir="rtl" class="details-movie">
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
