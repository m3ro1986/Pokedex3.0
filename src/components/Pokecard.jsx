import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Pokemon from './Pokemon';

const Pokecard = ( { url }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const pokemon = useSelector( state => state.pokemon );
    const [ pokemon, setPokemon ] = useState({});
    const getPokemon = () => {axios.get( url ).then( res => setPokemon( res.data )) }
    
    useEffect( () => getPokemon(), [])
    // console.log(pokemon)

    const goPokemon = () => {
        navigate(`/pokedex/${pokemon.name}`);
    }

    return (
        <div className='pokecard-box' onClick={ goPokemon }>
            {pokemon.name}
        </div>
    );
};

export default Pokecard;