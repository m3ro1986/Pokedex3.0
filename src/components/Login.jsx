import '../assets/styles/login.css'
import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getName } from '../store/slices/userName';
import ash from '../assets/images/Ash-Pokemon.png';
import logo from '../assets/images/pokemonlogo.png';

const Login = () => {

    const userName = useSelector( state => state.userName );
    const dispatch = useDispatch();
    const navigate = useNavigate();


    return (
        <div className='login-box'>
            <div className='login-box_img-box img1'>
                <img src={logo} alt="" />
            </div>
            <div className='login-box_img-box'>
                <img src={ ash } alt="" />
            </div>
            <h2>Hello trainer!!!</h2>
            <h3>Give your name to start</h3>
            <div className='login-box_input-box'>
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