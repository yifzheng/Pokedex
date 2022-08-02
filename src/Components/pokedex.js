import React from "react";
//import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGen1Pokemon } from "../Redux/reducers";

// pokemon card component
import PokemonCard from "./pokemonCard";

const Pokedex = () => {
	const pokemons = useSelector((state) => state.pokemons);

	const dispatch = useDispatch();
	useEffect(() => {
		const getPokemon = async () => {
			dispatch(getAllGen1Pokemon());
		};
		getPokemon();
	}, []);

	return (
		<div className="Pokedex">
			<header>
				<h1>Generation 1 Pokedex</h1>
			</header>
			{pokemons !== undefined &&
				pokemons.map((pokemon, index) => {
					return <PokemonCard key={index} name={pokemon.name} pokemonUrl = {pokemon.url}/>;
				})}
		</div>
	);
};

export default Pokedex;
