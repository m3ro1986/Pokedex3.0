import '../assets/styles/pokecard.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Pokemon from './Pokemon';

const Pokecard = ({ url }) => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [ classType, setclassType ] = useState('')
    const [pokemon, setPokemon] = useState({});
    const getPokemon = () => { axios.get(url).then(res => setPokemon(res.data)) }

    useEffect(() => {getPokemon()}, [])
    // console.log(pokemon)

    const goPokemon = () => {
        navigate(`/pokedex/${pokemon.name}`);
    }






    return (
        <div className={`pokecard-box ${ pokemon.types?.[0].type.name }`} onClick={goPokemon}>
            <img className='pokecard-box-img' src={pokemon.sprites?.other.dream_world.front_default} alt="" />
            <div className='pokeinfo'>
                <div className='pokeinfo-name'>
                    <h5 className={`${ pokemon.types?.[0].type.name }font`}> {pokemon.name} </h5>
                </div>
                <ul className={`types ${ pokemon.types?.[0].type.name }font`}>
                    {
                        pokemon.types?.map(e => (
                            <li key={e.slot}>
                                {e.type.name}
                            </li>
                        ))
                    }
                </ul>

                <ul className='stats'>
                    <li> hp: <b className={`${ pokemon.types?.[0].type.name }font`}>{pokemon.stats?.[0].base_stat}</b> </li>
                    <li> atack: <b className={`${ pokemon.types?.[0].type.name }font`}>{pokemon.stats?.[1].base_stat}</b> </li>
                    <li> defense: <b className={`${ pokemon.types?.[0].type.name }font`}>{pokemon.stats?.[2].base_stat}</b> </li>
                    <li> speed: <b className={`${ pokemon.types?.[0].type.name }font`}>{pokemon.stats?.[5].base_stat}</b> </li>
                </ul>
            </div>
            {/* <script>
                {document.getElementsByClassName('pokecard-box').classList.add('prueba')}
            </script> */}
        </div>
    );
};

export default Pokecard;