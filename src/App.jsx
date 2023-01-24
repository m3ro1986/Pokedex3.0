import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Pokedex from './components/Pokedex'
import Pokemon from './components/Pokemon'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {

    return (
        <HashRouter>
            <Routes>
                <Route path='/' element={ <Login />}/>
                <Route element={ <ProtectedRoutes />}>
                    <Route path='/pokedex' element={ <Pokedex /> }/>
                    <Route path='/pokedex/:name' element={ <Pokemon /> }/>
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default App
