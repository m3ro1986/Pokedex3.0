import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getName } from '../store/slices/userName';

const Login = () => {

    const userName = useSelector( state => state.userName );
    const dispatch = useDispatch();
    const navigate = useNavigate();


    return (
        <div>
            <h2>Hello trainer!!!</h2>
            <h4>Give your name to start</h4>
            <div>
                <input 
                    type="text"
                    value={userName} 
                    onChange={ e => dispatch( getName( e.target.value )) }
                />
                <button onClick={ () => navigate('/pokedex') }>Start</button>
            </div>
        </div>
    );
};

export default Login;