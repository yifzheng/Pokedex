import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
	return (
		<div className="homepage">
			<header className="homepage-header">
				<h1>Welcome to the Generation 1 Pokedex</h1>
			</header>
			<section className="hoempage-continue">
				<Link to="/pokedex">
					<button className="homepage-to-pokedex">
						Continue to Pokedex
					</button>
				</Link>
			</section>
		</div>
	);
};

export default Homepage;
