import '../assets/styles/pokedex.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Pokecard from './Pokecard';
import title from '../assets/images/titulopokedex.png'

const Pokedex = () => {


    const userName = useSelector(state => state.userName)
    const navigate = useNavigate();
    const [pokename, setPokename] = useState('')
    const [pokemons, setPokemons] = useState([]);
    const [poketypes, setPoketypes] = useState([]);
    const [quantity, setQuantity] = useState(8);
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(page + quantity);
    const [typeName, settypeName] = useState('');

    const getPokemons = () => { axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1279').then(res => setPokemons(res.data.results)); };
    const getPoketypes = () => { axios.get('https://pokeapi.co/api/v2/type/').then(res => setPoketypes(res.data.results)); };
    const getPoketype = (path) => { axios.get(path).then(res => setPokemons(res.data.pokemon)) };
    const filterTypes = (e) => { e.target.value === 'all' ? getPokemons() : getPoketype(e.target.value) };
    const lastPage = () => { if (page > 0) { setPage((page - quantity < 0) ? 0 : page - quantity); setLimit(limit - quantity); } };
    const nextPage = () => { if (limit < pokemons.length) { setPage((page + quantity > pokemons.length) ? page : page + quantity); setLimit((page + quantity) + quantity); } };
    const changeQuantity = (n) => { setQuantity(n) };
    const searchPoke = () => { navigate(`/pokedex/${pokename.toLowerCase()}`) }

    useEffect(() => { getPokemons(); getPoketypes() }, []);
    // useEffect( () => getPoketypes(), []);

    // console.log( pokemons )


    console.log( typeName )

    return (
        <div className='pokedex-box'>
            <div className='pokedex-box_title'>
                <img src={title} alt="" />
            </div>
            <h3>Welcome {userName}, here you can find your favorite pokemon!!! </h3>

            <div className='pokedex-box_input-box'>
                <input
                    type="text"
                    value={pokename}
                    onChange={e => setPokename(e.target.value)}
                />
                <button className='goButton' onClick={searchPoke}>Go</button>
            </div>

            <select className='filter-box' onChange={filterTypes}>
                <option value="all"> All pokemons </option>
                {
                    poketypes.map(e => (
                        <option key={e.name} value={e.url}>
                            {e.name}
                        </option>
                    ))
                }
            </select>
            <h3> Pokemones: {pokemons.length} </h3>
            <div className='pokedex-box_pokelist'>
                {
                    pokemons.slice(page, (page + quantity)).map(e => (
                        <div key={e.url ? e.url : e.pokemon.url} className='pokecard'>
                            <Pokecard url={e.url ? e.url : e.pokemon.url} />
                        </div>
                    ))
                }
            </div>
            <div className='buttons-box'>
                <button className='buttons-box_b' onClick={lastPage}><i className='bx bxs-left-arrow'></i></button>
                <button className='buttons-box_b' onClick={nextPage}><i className='bx bxs-right-arrow' ></i></button>
            </div>
            <div className='pokedex-box_config'>
                <h3>Config</h3>
                <button onClick={() => changeQuantity(4)}>4</button>
                <button onClick={() => changeQuantity(8)}>8</button>
                <button onClick={() => changeQuantity(12)}>12</button>
                <button onClick={() => changeQuantity(16)}>16</button>
            </div>
        </div>
    );
};

export default Pokedex;