import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGen1Pokemon } from "../Redux/reducers";
import { Button } from "@mui/material";

// pokemon card component
import PokemonCard from "./pokemonCard";

const Pokedex = () => {
	const pokemons = useSelector((state) => state.pokemons);
	let navigate = useNavigate();

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
				<div id="back-button-container">
					<Button
						id="back-navigate-btn"
						variant="outlined"
						onClick={() => navigate("/")}
					>
						Back
					</Button>
				</div>
				<h1>Generation 1 Pokedex</h1>
			</header>
			{pokemons !== undefined &&
				pokemons.map((pokemon, index) => {
					return (
						<PokemonCard
							key={index}
							name={pokemon.name}
							pokemonUrl={pokemon.url}
						/>
					);
				})}
		</div>
	);
};

export default Pokedex;
