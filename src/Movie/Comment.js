import React, { useEffect } from 'react'
import './Actor.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../Styles.css'
import ActorImage from '../Images/Tom-Holland-crop.jpg'
function Comment(props) {
    return (
            <div className="comment-user">
            <div className="commentor-name">
                <b>علی</b>
            </div>
            <div className="commentor-comment" dir="rtl">
                فیلم تاثیر گذاری بود
            </div>
            <div className="like-dislike-info">
                <div className="like-dislike-div">
                    <button type="submit" className="like-dislike-btn"><img src="/Images/arrow-down.png" alt="" className="like-dislike-img"/></button>
                    <b className="like-dislike-number">5</b>
                </div>
                <div className="like-dislike-div">
                    <button type="submit" className="like-dislike-btn"><img src="/Images/arrow-up.png" alt="" className="like-dislike-img"/></button>
                    <b className="like-dislike-number">12</b>
                </div>
            </div>
        </div>

    )
}

export default Comment
