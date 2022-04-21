import 'bootstrap/dist/css/bootstrap.css';
import Header from '../Header/Header'
import MovieWatchlist from './MovieWatchlist';
import './Watchlist.css'
import '../Styles.css'
import MovieRec from './MovieRec';

function Watchlist(props) {
    return (

        <body>
            
            <Header email="sina99.sn@gmail.com"/>

            <div class="container">
                <div class="row">

                    <MovieWatchlist />

                    <div class="w-100"></div>

                    <MovieWatchlist />

                    <div class="w-100"></div>

                    <div class="col" id="recommends">
                        <div class="info">
                            <div class="title-recommends">
                                <label>
                                    فیلم های پیشنهادی
                                </label>
                            </div>
                            <div class="films-recommended">

                                <MovieRec />

                                <MovieRec />

                                <MovieRec />

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </body>
    )
}

export default Watchlist
