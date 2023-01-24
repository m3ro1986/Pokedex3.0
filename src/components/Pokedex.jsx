import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Pokecard from './Pokecard';

const Pokedex = () => {

   
    const userName = useSelector( state => state.userName )
    const navigate = useNavigate();
    const [ pokename, setPokename ] = useState('')
    const [ pokemons, setPokemons ] = useState( [] );
    const [ poketypes, setPoketypes] = useState( [] );
    const [ quantity, setQuantity ] = useState( 6 );
    const [ page, setPage ] = useState( 0 );
    const [ limit, setLimit ] = useState( page + quantity );

    const getPokemons = () => { axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1279').then( res => setPokemons( res.data.results )); };
    const getPoketypes = () => { axios.get('https://pokeapi.co/api/v2/type/').then( res => setPoketypes( res.data.results )); };
    const getPoketype = ( path ) => { axios.get( path ).then( res => setPokemons( res.data.pokemon ))};
    const filterTypes = (e) => { e.target.value === 'all' ? getPokemons() : getPoketype( e.target.value ) };
    const lastPage = () => { if ( page > 0 ) { setPage( (page-quantity < 0) ? 0 : page-quantity); setLimit( limit - quantity );}};
    const nextPage = () => {if(limit < pokemons.length){setPage((page+quantity > pokemons.length) ? page : page+quantity);setLimit((page+quantity)+quantity);}};
    const changeQuantity = (n) => { setQuantity(n) };
    const searchPoke = () => { navigate(`/pokedex/${pokename.toLowerCase()}`) }

    useEffect( () => {getPokemons(); getPoketypes()}, []);
    // useEffect( () => getPoketypes(), []);



    return (
        <div>
            <h3>Welcome { userName }, here you can find your favorite pokemon!!! </h3>

            <div>   
                <input
                    type="text"
                    value={pokename} 
                    onChange={ e => setPokename( e.target.value )}
                />
                <button onClick={ searchPoke }>Go</button>
            </div>

            <select onChange={ filterTypes }>
                <option value="all"> All pokemons </option>
                {
                    poketypes.map( e => (
                        <option key={ e.name } value={ e.url }>
                            { e.name }
                        </option>
                    ))
                }
            </select>
            <h3> Pokemones: { pokemons.length } </h3>
            <div>
                {
                    pokemons.slice( page, (page + quantity)).map( e => (
                        <div key={ e.url ? e.url : e.pokemon.url } className='pokecard'>
                            <Pokecard url={ e.url ? e.url : e.pokemon.url }/>
                        </div>
                    ))
                }
            </div>
            <button onClick={ lastPage }>last</button>
            <button onClick={ nextPage }>next</button>
            <div>
                <button onClick={ () => changeQuantity(4)}>4</button>
                <button onClick={ () => changeQuantity(6)}>6</button>
                <button onClick={ () => changeQuantity(8)}>8</button>
                <button onClick={ () => changeQuantity(10)}>10</button>
            </div>
        </div>
    );
};

export default Pokedex;