import React from "react";
import { Link } from "react-router-dom";
import "../CSS/pokemoncard.css";

const PokemonCard = ({ name, pokemonUrl }) => {
	const id = pokemonUrl
		.substring(pokemonUrl.indexOf("pokemon"))
		.split("/")[1];

	return (
		<Link
			to={`/pokemon/${id}`}
			style={{ textDecoration: "none", color: "black" }}
		>
			<div className="pokemon-card">
				<p className="pokemon-id">#{id}</p>

				<p className="pokemon-name">
					{name.charAt(0).toUpperCase() + name.slice(1)}
				</p>
			</div>
		</Link>
	);
};

export default PokemonCard;
