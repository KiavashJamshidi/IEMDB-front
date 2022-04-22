import React, { useEffect } from 'react'
import './Movie.css'
import '../Styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../Header/Header'
import Actor from './Actor';
import Comment from './Comment';

function Movie(props) {
    return (
    <div>
        
        <Header />
        <div>
            <div className="movie-wallpaper">
                <div className="fade"></div>
                <img src="/Images/noWayHome-wide-wallpaper.jpg" alt=""/>
            </div>

            <div className="movie-info">
                <div className="movie-description-div">
                    <div className="movie-description">
                        <div className="movie-picture">
                            <img src="/Images/no-way-home.jpg" className="image-film" alt=""/>
                        </div>
                        <div className="info-movie">
                            <div className="info-movie-title">
                                <label>Spider-Man: No Way Home</label>
                            </div>
                            <div className="info-movie-details">
                                <label>Jon Watts :کارگردان </label>
                            </div>
                            <div className="info-movie-details">
                                <label>Stan Lee, Chris McKenna, Steve Dikto :نویسنده </label>
                            </div>
                            <div className="info-movie-details">
                                <label dir="rtl">مدت زمان: 145 دقیقه</label>
                            </div>
                            <div className="info-movie-releasedate">
                                <label dir="rtl"> تاریخ انتشار: 2021/12/17</label>
                            </div>
                            <div className="info-movie-description" dir="rtl">
                                <label dir="rtl"> با فاش شدن هویت مرد عنکبوتی، وب‌گرد دوستانه محله ما نقاب بردار شده و دیگر نمی‌تواند زندگی عادی خود به عنوان پیتر پارکر را از خطرات بالای ابرقهرمان بودن جدا کند. وقتی پیتر از دکتر استرنج کمک می‌خواهد، خطرات حتی خطرناک‌تر می‌شود و او را مجبور می‌کند بفهمد که واقعاً مرد عنکبوتی بودن به چه معناست.</label>
                            </div>

                        </div>
                        <div className="rate-info">
                            <div>
                                <label className="imdb-rate">
                                    <b>
                                        8.8
                                    </b>
                                </label>
                                <br/>
                                <div className="dropdown">
                                    <button className="dropbtn">
                                        <img src="/Images/star.png" alt="" className="star"/>
                                    </button>
                                    <div className="dropdown-content">
                                        <div className="rate">
                                            <input type="radio" id="star10" name="rate" value="10" />
                                            <label htmlFor="star10" title="text"></label>
                                            <input type="radio" id="star9" name="rate" value="9" />
                                            <label htmlFor="star9" title="text"></label>
                                            <input type="radio" id="star8" name="rate" value="8" />
                                            <label htmlFor="star8" title="text"></label>
                                            <input type="radio" id="star7" name="rate" value="7" />
                                            <label htmlFor="star7" title="text"></label>
                                            <input type="radio" id="star6" name="rate" value="6" />
                                            <label htmlFor="star6" title="text"></label>
                                            <input type="radio" id="star5" name="rate" value="5" />
                                            <label htmlFor="star5" title="text"></label>
                                            <input type="radio" id="star4" name="rate" value="4" />
                                            <label htmlFor="star4" title="text"></label>
                                            <input type="radio" id="star3" name="rate" value="3" />
                                            <label htmlFor="star3" title="text"></label>
                                            <input type="radio" id="star2" name="rate" value="2" />
                                            <label htmlFor="star2" title="text"></label>
                                            <input type="radio" id="star1" name="rate" value="1" />
                                            <label htmlFor="star1" title="text"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="rate-users-info">
                                <div className="rate-users">
                                    <b>
                                        8.3
                                    </b>
                                </div>
                                <div className="rate-number-users">
                                    <b className="title-rate-users">
                                        امتیاز کاربران
                                    </b>
                                    <br/>
                                    <label className="number-of-raters">
                                        (23 رای)
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

                                <Actor />

                                <Actor />

                                <Actor />

                                <Actor />
                            </div>
                        </div>
                    </div>

                    <div className="w-100"></div>

                    <div className="col">
                        <div className="comments">
                            <div>دیدگاه ها</div>

                            <div className="form-field">
                                <label className="title-comment" dir="rtl"><b>دیدگاه خود را اضافه کنید:</b></label>
                                <textarea className="comment" dir="rtl"></textarea>
                                <button className="register-comment">ثبت</button>
                            </div>
                            
                            <Comment />
                            
                            <Comment />

                            <Comment />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Movie