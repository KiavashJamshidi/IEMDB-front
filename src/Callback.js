import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_URL } from './EnvironmentVariables';
import axios from "axios";

function Callback() {
    const navigate = useNavigate();

    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('code');
    const url = `${API_URL}/oauth`

    async function sendCode() {
        const resp = await axios.post(
            url,
            {'code': id}
        );
        navigate('/movies');
        return resp.data;
    }

    useEffect(() => {
        sendCode()
            .then(c => {
                
            })
            .catch(error => {
                if (error.response)
                    console.log(error.response.data);
                else
                    console.log(error);
            });
      }, []);    


    return (
        <div style={{color: "white"}}>
            <p> {id}</p>
            <p>Redirecting to home page ...</p>
        </div>
    )
}

export default Callback