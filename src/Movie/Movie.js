import React, { useEffect, useState } from 'react'
import './Movie.css'
import '../Styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../Header/Header'
import Actor from './Actor';
import Comment from './Comment';

import { useParams } from 'react-router-dom';
import { API_URL } from '../EnvironmentVariables';
import star from "../Images/star.png"
import axios from "axios";

function Movie(props) {
    const { movieId } = useParams();
    var avgRate1;
    var calculateAvgRate;
    let [movie, setMovie] = useState([]);
    let [actors, setActors] = useState([]);
    let [comments, setComments] = useState([]);
    let [votenum, setVotenum] = useState([]);
    let [avgRate, setAvgRate] = useState([]);
    let [movieRates, setMovieRates] = useState([]);
    const [text, setText] = useState('');

    async function getMovie() {
        const url = `${API_URL}/movies/${movieId}`
        const resp = await axios.get(
            url
        );
        return resp.data;
    }
    async function getActors() {
        const url = `${API_URL}/movies/${movieId}/actors`
        const resp = await axios.get(
            url
        );
        return resp.data;
    }
    async function getComments() {
        const url = `${API_URL}/movies/${movieId}/comments`
        const resp = await axios.get(
            url
        );
        return resp.data;
    }

    async function getMovieRates() {
        const url = `${API_URL}/movies/${movieId}/rates`
        const resp = await axios.get(
            url
        );
        return resp.data;
    }

    const addComment = (event, movieId, comment) => {
        event.preventDefault();
        const url = `${API_URL}/movies/${movieId}/addComment`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "text" : comment,
            })
        })
        .then(resp => resp.json())
        .catch(errors => console.log(errors));
        window.location.reload(false);
    }

    const addToWatchlist = (event, movieId) => {
        event.preventDefault();
        const url = `${API_URL}/movies/${movieId}/addToWatchlist`;
        fetch(url, {
            method: 'POST',
        })
        .then(resp => resp.json())
        .catch(errors => console.log(errors));
        window.location.reload(false);
    }
    const rateMovie = (event, rateValue) => {
        event.preventDefault();
        const url = `${API_URL}/movies/${movieId}/rate`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "RateValue" : rateValue
            })
        })
        .then(resp => resp.json())
        .catch(errors => console.log(errors));
        window.location.reload(false);
    }

    // function calculateAvgRate = () => {
    //     avgRate = 0;
    //     movieRates.map((rate,i) => avgRate += rate) ;
    //     avgRate /= votenum;
    // }
    
    function calculateAvgRate() {
        avgRate1 = 0;
        movieRates.map((rate,i) => avgRate1 += rate) ;
        avgRate1 = avgRate1 / votenum;
        return setAvgRate(avgRate1);
    }

    useEffect(() => {
        getMovie()
            .then(c => {
                setMovie(c);
            })
            .catch(error => {
                if (error.response)
                    console.log(error.response.data);
                else
                    console.log(error);
            });

        getActors()
            .then(c => {
                setActors(c);
            })
            .catch(error => {
                if (error.response)
                    console.log(error.response.data);
                else
                    console.log(error);
            });

        getComments()
            .then(c => {
                setComments(c);
            })
            .catch(error => {
                if (error.response)
                    console.log(error.response.data);
                else
                    console.log(error);
            });
        
        getMovieRates()
            .then(c => {
                setMovieRates(c);
                setVotenum(c.length);
                calculateAvgRate()
            })
            .catch(error => {
                if (error.response)
                    console.log(error.response.data);
                else
                    console.log(error);
            });
      }, []);    

    return (
    <div>
        
        <Header />
        <div>
            <div className="movie-wallpaper">
                <div className="fade"></div>
                <img src={movie.CoverImage} alt=""/>
            </div>

            <div className="movie-info">
                <div className="movie-description-div">
                    <div className="movie-description">
                        <div className="movie-picture">
                            <img src={movie.Image} className="small-image-film" alt=""/>
                            <button type="submit" className="addToWatchlistButton" onClick={(event) => addToWatchlist(event, movie.Id)}>افزودن به لیست</button>
                        </div>
                        <div className="info-specific-movie">
                            <div className="info-movie-title">
                                <label>{movie.name}</label>
                            </div>
                            <div className="info-movie-details">
                                <label>{movie.director} :کارگردان </label>
                            </div>
                            <div className="info-movie-details">
                                <label>{movie.writers} :نویسنده </label>
                            </div>
                            <div className="info-movie-details">
                                <label dir="rtl">مدت زمان: {movie.duration} دقیقه</label>
                            </div>
                            <div className="info-movie-releasedate">
                                <label dir="rtl"> تاریخ انتشار: {movie.releaseDate}</label>
                            </div>
                            <div className="info-movie-description" dir="rtl">
                                <label dir="rtl"> {movie.summary}</label>
                            </div>

                        </div>
                        <div className="rate-info">
                            <div>
                                <label className="imdb-rate">
                                    <b>
                                        {movie.IMDBRate}
                                    </b>
                                </label>
                                <br/>
                                <div className="dropdown">
                                    <button className="dropbtn">
                                        <img src={star} alt="" className="star"/>
                                    </button>
                                    <div className="dropdown-content">
                                        <div className="rate">
                                            <input type="radio" id="star10" name="rate" value="10" onClick={(event) => rateMovie(event, 10)}/>
                                            <label htmlFor="star10" title="text"></label>
                                            <input type="radio" id="star9" name="rate" value="9" onClick={(event) => rateMovie(event, 9)}/>
                                            <label htmlFor="star9" title="text"></label>
                                            <input type="radio" id="star8" name="rate" value="8" onClick={(event) => rateMovie(event, 8)}/>
                                            <label htmlFor="star8" title="text"></label>
                                            <input type="radio" id="star7" name="rate" value="7" onClick={(event) => rateMovie(event, 7)}/>
                                            <label htmlFor="star7" title="text"></label>
                                            <input type="radio" id="star6" name="rate" value="6" onClick={(event) => rateMovie(event, 6)}/>
                                            <label htmlFor="star6" title="text"></label>
                                            <input type="radio" id="star5" name="rate" value="5" onClick={(event) => rateMovie(event, 5)}/>
                                            <label htmlFor="star5" title="text"></label>
                                            <input type="radio" id="star4" name="rate" value="4" onClick={(event) => rateMovie(event, 4)}/>
                                            <label htmlFor="star4" title="text"></label>
                                            <input type="radio" id="star3" name="rate" value="3" onClick={(event) => rateMovie(event, 3)}/>
                                            <label htmlFor="star3" title="text"></label>
                                            <input type="radio" id="star2" name="rate" value="2" onClick={(event) => rateMovie(event, 2)}/>
                                            <label htmlFor="star2" title="text"></label>
                                            <input type="radio" id="star1" name="rate" value="1" onClick={(event) => rateMovie(event, 1)}/>
                                            <label htmlFor="star1" title="text"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rate-users-info">
                                <div className="rate-users">
                                    <b>
                                        {(votenum != 0) ? avgRate : 0}
                                    </b>
                                </div>
                                <div className="rate-number-users">
                                    <b className="title-rate-users">
                                        امتیاز کاربران
                                    </b>
                                    <br/>
                                    <label className="number-of-raters" dir="rtl">
                                        ({votenum} رای)
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="cast">
                            <div>بازیگران</div>
                            <div className="cast-pictures">

                            {(actors || []).map(actr => (

                                <Actor actor={actr}/>

                            ) )}
                            
                            </div>
                        </div>
                    </div>

                    <div className="w-100"></div>

                    <div className="col">
                        <div className="comments">
                            <div>دیدگاه ها</div>

                            <div className="form-field">
                                <label className="title-comment" dir="rtl"><b>دیدگاه خود را اضافه کنید:</b></label>
                                <textarea className="comment" dir="rtl" 
                                    value={text} 
                                    onChange={e => setText(e.target.value)}>
                                </textarea>
                                <button className="register-comment" onClick={(event) => addComment(event, movie.Id, text)}>ثبت</button>
                            </div>
                            
                            {(comments || []).map(cmnt => (

                                <Comment comment={cmnt}/>

                            ) )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Movie