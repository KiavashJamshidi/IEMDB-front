import 'bootstrap/dist/css/bootstrap.css';
import Header from '../Header/Header'
import MovieWatchlist from './MovieWatchlist';
import './Watchlist.css'
import '../Styles.css'
import MovieRec from './MovieRec';

function Watchlist(props) {
    return (

        <div>
            
            <Header email="sina99.sn@gmail.com"/>

            <div className="container">
                <div className="row">

                    <MovieWatchlist />

                    <div className="w-100"></div>

                    <MovieWatchlist />

                    <div className="w-100"></div>

                    <div className="col" id="recommends">
                        <div className="info">
                            <div className="title-recommends">
                                <label>
                                    فیلم های پیشنهادی
                                </label>
                            </div>
                            <div className="films-recommended">

                                <MovieRec />

                                <MovieRec />

                                <MovieRec />

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Watchlist
