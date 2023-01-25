import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Pokemon = () => {

    const { name } = useParams();
    const [pokemon, setPokemon] = useState({}) 

    useEffect( () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then( res => setPokemon( res.data ))
    },[])

    return (
        <div>
            { pokemon.name }
            { pokemon.types?.[0].type.name }
        </div>
    );
};

export default Pokemon;