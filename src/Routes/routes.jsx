import React from 'react'

import { Route, Routes } from 'react-router-dom'

// homepage import
import Homepage from "../Components/homepage"
// not found import
import NotFound from "../Components/notfound"
// pokedex home import
import Pokedex from '../Components/pokedex'
//display Pokemon info
import DisplayPokemon from '../Components/displayPokemon'

const PageRoutes = () => {
    return (
        <Routes>
            <Route exact path="/Pokedex/" element={ <Homepage /> } />
            <Route exact path="/Pokedex/pokemon" element={ <Pokedex /> } />
            <Route path="/Pokedex/pokemon/:id" element={ <DisplayPokemon /> } />
            <Route path="*" element={ <NotFound /> } />
        </Routes>
    )
}

export default PageRoutes