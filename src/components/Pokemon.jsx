import '../assets/styles/pokemon.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import title from '../assets/images/titulopokedex.png'

const Pokemon = () => {

    const { name } = useParams();
    const [pokemon, setPokemon] = useState({}) 

    useEffect( () => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then( res => setPokemon( res.data ))
    },[])

    // console.log( pokemon )

    return (
        <div className='pokemon-box'>
            <header className={`pokemon-box_title ${ pokemon.types?.[0].type.name }`}>
                <img src={title} alt="" />
            </header>
            <div className='pokemon-box_infopoke'>
                <div className={`pokemon-box_cardheader ${ pokemon.types?.[0].type.name }`}>
                    <img className='pokemon-box-img' src={pokemon.sprites?.other.dream_world.front_default} alt="" />
                </div>
                <div className={`pokemon-box_infopoke_info ${ pokemon.types?.[0].type.name }font`}>
                    <h3> { pokemon.name } #id { pokemon.id }</h3>
                    <div className='measures-box'>
                        <h5> height: {pokemon.height} </h5>
                        <h5> weight: {pokemon.weight} </h5>
                    </div>
                    <div className='types-skills-box'>
                        <div className='types-box'>
                            <h4> Types </h4>
                            <ul>
                                {
                                    pokemon.types?.map( e => (
                                        <li key={ e.type.name } className={ e.type.name }>
                                            { e.type.name }
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className='types-box skills'>
                            <h4> skills </h4>
                            <ul>
                                {
                                    pokemon.abilities?.map( e => (
                                        <li key={ e.ability.name  }>
                                            { e.ability.name }
                                        </li>
                                    ))
                                }                            
                            </ul>
                        </div>
                    </div>

                    <div className='pokemon_stats-box'>
                        <h3>stats</h3>
                        <div className='stats-container'>
                            <div className={`stat ${ pokemon.types?.[0].type.name }`} style={ { width: `${pokemon.stats?.[0].base_stat}%` }}> hp </div>
                            
                            <h4> {pokemon.stats?.[0].base_stat}% </h4>
                        </div>
                        <div className='stats-container'>
                            <div className={`stat ${ pokemon.types?.[0].type.name }`} style={ { width: `${pokemon.stats?.[1].base_stat}%` }}> attack </div>
                            <h4> {pokemon.stats?.[1].base_stat}% </h4>
                        </div>
                                                <div className='stats-container'>
                        <div className={`stat ${ pokemon.types?.[0].type.name }`} style={ { width: `${pokemon.stats?.[2].base_stat}%` }}> defense </div>
                            <h4> {pokemon.stats?.[2].base_stat}% </h4>
                        </div>
                                                <div className='stats-container'>
                        <div className={`stat ${ pokemon.types?.[0].type.name }`} style={ { width: `${pokemon.stats?.[5].base_stat}%` }}> speed </div>
                            <h4> {pokemon.stats?.[5].base_stat}% </h4>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Pokemon;