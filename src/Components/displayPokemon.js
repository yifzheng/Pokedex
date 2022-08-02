import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSinglePokemon } from "../Redux/reducers";

const DisplayPokemon = () => {
	const { id } = useParams();

	const pokemon = useSelector((state) => state.pokemon);
	const dispatch = useDispatch();

	useEffect(() => {
		const getPokemon = async () => {
			dispatch(getSinglePokemon(id));
		};
		getPokemon();
	}, []);

	const displayTypes = () => {
		const typesArray = [];
		pokemon.types.forEach((type) => {
			typesArray.push(
				type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)
			);
		});
		return typesArray.toString().replace(/,/gi, ", ");
	};

	const displayAbilities = () => {
		const abilitiesArray = [];
		pokemon.abilities.forEach((ability) => {
			abilitiesArray.push(
				ability.ability.name.charAt(0).toUpperCase() +
					ability.ability.name.slice(1)
			);
		});
		return abilitiesArray.toString().replace(/,/gi, ", ");
	};
	return (
		<div className="pokemon-info-container">
			{pokemon !== undefined && console.log(pokemon)}
			{pokemon !== undefined ? (
				<div className="display-pokemon-info">
					<h1 id="pokemon-name">
						Name: {pokemon.name && pokemon.name.toUpperCase()}
					</h1>
					{pokemon.stats !== undefined &&
						pokemon.stats.map((stat, index) => {
							return (
								<p key={index} className="pokemon-stats">
									{stat.stat.name &&
										stat.stat.name.charAt(0).toUpperCase() +
											stat.stat.name.substring(1)}
									: {stat.base_stat}
								</p>
							);
						})}
					<p id="pokemon-height">Height: {pokemon.height * 10} CM</p>
					<p id="pokemon-weight"> Weight: {pokemon.weight / 10} KG</p>
					<p id="pokemon-types">
						Types: {pokemon.types && displayTypes()}
					</p>
					<p id="pokemon-abilities">
						Abilities: {pokemon.abilities && displayAbilities()}
					</p>
				</div>
			) : (
				<h1 id="loading">Loading</h1>
			)}
		</div>
	);
};

export default DisplayPokemon;
