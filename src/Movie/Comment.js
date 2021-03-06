import React, { useEffect, useState } from 'react'
import './Actor.css'
import 'bootstrap/dist/css/bootstrap.css';
// import '../Styles.css'
import like from '../Images/arrow-up.png'
import dislike from '../Images/arrow-down.png'
import { API_URL } from '../EnvironmentVariables';
import axios from "axios";

function Comment(props) {
    let [likes, setLikes] = useState([]);
    let [dislikes, setDislikes] = useState([]);
    async function getLikes() {
        const url = `${API_URL}/voteComment/${props.comment.Id}/likes`
        const resp = await axios.get(
            url,
            {'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}`}}
        );
        return resp.data;
    }
    async function getDisLikes() {
        const url = `${API_URL}/voteComment/${props.comment.Id}/dislikes`
        const resp = await axios.get(
            url,
            {'headers': { 'Authorization': `Bearer ${localStorage.getItem('token')}`}}
        );
        return resp.data;
    }

    const addVoteComment = (event, commentId, vote) => {
        event.preventDefault();
        const url = `${API_URL}/voteComment/${commentId}/${vote}`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',  'Authorization': `Bearer ${localStorage.getItem('token')}`},
        })
        .then(resp => resp.json())
        // .then(res => handleResponse(res))
        .catch(errors => console.log(errors));
        window.location.reload(false);
    }

    useEffect(() => {
        getLikes()
            .then(c => {
                setLikes(c);
            })
            .catch(error => {
                if (error.response)
                    console.log(error.response.data);
                else
                    console.log(error);
            });

        getDisLikes()
            .then(c => {
                setDislikes(c);
            })
            .catch(error => {
                if (error.response)
                    console.log(error.response.data);
                else
                    console.log(error);
            });

      }, []);    


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
                    <b className="like-dislike-number">{dislikes}</b>
                </div>
                <div className="like-dislike-div">
                    <button type="submit" className="like-dislike-btn"><img src={like} alt="" className="like-dislike-img" onClick={(event) => addVoteComment(event, props.comment.Id, 1)}/></button>
                    <b className="like-dislike-number">{likes}</b>
                </div>
            </div>
        </div>

    )
}

export default Comment
