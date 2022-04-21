import React, { useEffect } from 'react'
import './Movie.css'
import '../Styles.css'
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../Header/Header'
import Actor from './Actor';
import Comment from './Comment';

function Movie(props) {
    return (
    <body>
        
        <Header />
        <div>
            <div class="movie-wallpaper">
                <div class="fade"></div>
                <img src="/Images/noWayHome-wide-wallpaper.jpg" alt=""/>
            </div>

            <div class="movie-info">
                <div class="movie-description-div">
                    <div class="movie-description">
                        <div class="movie-picture">
                            <img src="/Images/no-way-home.jpg" class="image-film" alt=""/>
                        </div>
                        <div class="info-movie">
                            <div class="info-movie-title">
                                <label>Spider-Man: No Way Home</label>
                            </div>
                            <div class="info-movie-details">
                                <label>Jon Watts :کارگردان </label>
                            </div>
                            <div class="info-movie-details">
                                <label>Stan Lee, Chris McKenna, Steve Dikto :نویسنده </label>
                            </div>
                            <div class="info-movie-details">
                                <label dir="rtl">مدت زمان: 145 دقیقه</label>
                            </div>
                            <div class="info-movie-releasedate">
                                <label dir="rtl"> تاریخ انتشار: 2021/12/17</label>
                            </div>
                            <div class="info-movie-description" dir="rtl">
                                <label dir="rtl"> با فاش شدن هویت مرد عنکبوتی، وب‌گرد دوستانه محله ما نقاب بردار شده و دیگر نمی‌تواند زندگی عادی خود به عنوان پیتر پارکر را از خطرات بالای ابرقهرمان بودن جدا کند. وقتی پیتر از دکتر استرنج کمک می‌خواهد، خطرات حتی خطرناک‌تر می‌شود و او را مجبور می‌کند بفهمد که واقعاً مرد عنکبوتی بودن به چه معناست.</label>
                            </div>

                        </div>
                        <div class="rate-info">
                            <div>
                                <label class="imdb-rate">
                                    <b>
                                        8.8
                                    </b>
                                </label>
                                <br/>
                                <div class="dropdown">
                                    <button class="dropbtn">
                                        <img src="/Images/star.png" alt="" class="star"/>
                                    </button>
                                    <div class="dropdown-content">
                                        <div class="rate">
                                            <input type="radio" id="star10" name="rate" value="10" />
                                            <label for="star10" title="text"></label>
                                            <input type="radio" id="star9" name="rate" value="9" />
                                            <label for="star9" title="text"></label>
                                            <input type="radio" id="star8" name="rate" value="8" />
                                            <label for="star8" title="text"></label>
                                            <input type="radio" id="star7" name="rate" value="7" />
                                            <label for="star7" title="text"></label>
                                            <input type="radio" id="star6" name="rate" value="6" />
                                            <label for="star6" title="text"></label>
                                            <input type="radio" id="star5" name="rate" value="5" />
                                            <label for="star5" title="text"></label>
                                            <input type="radio" id="star4" name="rate" value="4" />
                                            <label for="star4" title="text"></label>
                                            <input type="radio" id="star3" name="rate" value="3" />
                                            <label for="star3" title="text"></label>
                                            <input type="radio" id="star2" name="rate" value="2" />
                                            <label for="star2" title="text"></label>
                                            <input type="radio" id="star1" name="rate" value="1" />
                                            <label for="star1" title="text"></label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="rate-users-info">
                                <div class="rate-users">
                                    <b>
                                        8.3
                                    </b>
                                </div>
                                <div class="rate-number-users">
                                    <b class="title-rate-users">
                                        امتیاز کاربران
                                    </b>
                                    <br/>
                                    <label class="number-of-raters">
                                        (23 رای)
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="col">
                        <div class="cast">
                            <div>بازیگران</div>
                            <div class="cast-pictures">

                                <Actor />

                                <Actor />

                                <Actor />

                                <Actor />
                            </div>
                        </div>
                    </div>

                    <div class="w-100"></div>

                    <div class="col">
                        <div class="comments">
                            <div>دیدگاه ها</div>

                            <div class="form-field">
                                <label class="title-comment" dir="rtl"><b>دیدگاه خود را اضافه کنید:</b></label>
                                <textarea class="comment" dir="rtl"></textarea>
                                <button class="register-comment">ثبت</button>
                            </div>
                            
                            <Comment />
                            
                            <Comment />

                            <Comment />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
    )
}

export default Movie