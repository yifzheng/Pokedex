import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ name, pokemonUrl }) => {
	const id = pokemonUrl.substring(pokemonUrl.indexOf("pokemon")).split('/')[1];

	return (
		<Link to={`/pokedex/pokemon/${id}`} style={{ textDecoration: 'none' }}>
			<div className="pokemon-card">
				<p>{name}</p>
			</div>
		</Link>
	);
};

export default PokemonCard;
