import React, { useEffect } from 'react'
import { GetUser } from '../App'
// import Product from '../Products/Product'
// import { useStateValue } from '../StateManager/StateProvider'
import './Movies.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles.css'
import MovieHeader from './Header/movieHeader';
import Movie from './Movie'
// import {Helmet} from "react-helmet";
// const Demo = props => (
// <div className="application">
//             <Helmet>
//             <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
//             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
//             </Helmet>
//         </div>
  
// );
function Movies() {
    // const [state, dispatch] = useStateValue()
    let user;

    // useEffect( async () => {
    //     user = await GetUser(state);
    //     await dispatch({
    //         type: 'SET_USER_INFO',
    //         user: user
    //     });
    // }, [] )
    
    
    return (
        
        <body>
            
            <MovieHeader email="sina99.sn@gmail.com" />

            <div class="movies">
                <div class="redundant-div">
                </div>
                <div class="all-movies-div">
                    <div class="col-movie">
                        <Movie />
                        <Movie />
                        <Movie />
                    </div>
                    <div class="col-movie">
                        <Movie />
                        <Movie />
                        <Movie />
                    </div>
                    <div class="col-movie">
                        <Movie />
                        <Movie />
                        <Movie />
                    </div>
                    <div class="col-movie">
                        <Movie />
                        <Movie />
                        <Movie />
                    </div>
                </div>
                <div class="orderByContent">
                    <label>:رتبه بندی بر اساس</label>
                    <div class="orderBy">

                        <div>
                            <button class="orderByBtn">تاریخ</button>
                        </div>
                        <div>
                            <button class="orderByBtn">IMDB امتیاز</button>
                        </div>
                    </div>
                </div>

            </div>
        </body>
)
}

export default Movies