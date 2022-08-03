import React from "react";
import { Link } from "react-router-dom";

const PokemonCard = ({ name, pokemonUrl }) => {
	const id = pokemonUrl
		.substring(pokemonUrl.indexOf("pokemon"))
		.split("/")[1];

	return (
		<Link
			to={`/pokedex/pokemon/${id}`}
			style={{ textDecoration: "none", color: "black" }}
		>
			<div className="pokemon-card">
				<p id="pokemon-id">#{id}</p>

				<p>{name}</p>
			</div>
		</Link>
	);
};

export default PokemonCard;
