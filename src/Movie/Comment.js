import React, { useEffect } from 'react'
import './Actor.css'
import 'bootstrap/dist/css/bootstrap.css';
// import '../Styles.css'
import like from '../Images/arrow-up.png'
import dislike from '../Images/arrow-down.png'
import { API_URL } from '../EnvironmentVariables';
import axios from "axios";

function Comment(props) {

    const addVoteComment = (event, commentId, vote) => {
        event.preventDefault();
        const url = `${API_URL}/voteComment/${commentId}/${vote}`;
        fetch(url, {
            method: 'POST'
        })
        .then(resp => resp.json())
        // .then(res => handleResponse(res))
        .catch(errors => console.log(errors));
        window.location.reload(false);
    }

    return (
            <div className="comment-user">
            <div className="commentor-name">
                <b>{props.comment.UserEmail}</b>
            </div>
            <div className="commentor-comment" dir="rtl">
                {props.comment.text}
            </div>
            <div className="like-dislike-info">
                <div className="like-dislike-div">
                    <button type="submit" className="like-dislike-btn"><img src={dislike} alt="" className="like-dislike-img" onClick={(event) => addVoteComment(event, props.comment.Id, -1)}/></button>
                    <b className="like-dislike-number">{props.comment.likes}</b>
                </div>
                <div className="like-dislike-div">
                    <button type="submit" className="like-dislike-btn"><img src={like} alt="" className="like-dislike-img" onClick={(event) => addVoteComment(event, props.comment.Id, 1)}/></button>
                    <b className="like-dislike-number">{props.comment.dislikes}</b>
                </div>
            </div>
        </div>

    )
}

export default Comment
