import React, { useEffect } from 'react'
import './Actor.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles.css'
import ActorImage from '../Images/Tom-Holland-crop.jpg'
function Comment(props) {
    return (
            <div class="comment-user">
            <div class="commentor-name">
                <b>علی</b>
            </div>
            <div class="commentor-comment" dir="rtl">
                فیلم تاثیر گذاری بود
            </div>
            <div class="like-dislike-info">
                <div class="like-dislike-div">
                    <button type="submit" class="like-dislike-btn"><img src="/Images/arrow-down.png" alt="" class="like-dislike-img"/></button>
                    <b class="like-dislike-number">5</b>
                </div>
                <div class="like-dislike-div">
                    <button type="submit" class="like-dislike-btn"><img src="/Images/arrow-up.png" alt="" class="like-dislike-img"/></button>
                    <b class="like-dislike-number">12</b>
                </div>
            </div>
        </div>

    )
}

export default Comment
