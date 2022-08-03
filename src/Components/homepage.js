import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import "../CSS/homepage.css"

const Homepage = () => {
	return (
		<div id="homepage">
			<header className="homepage-header">
				<h1>Welcome to the Generation 1 Pokedex</h1>
			</header>
			<section id="homepage-image">
				<img
					src="./pokedex.png"
					alt="pokeball"
					width={400}
					height={225}
				/>
			</section>

			<section id="homepage-continue">
				<Link to="/Pokedex/pokemon" style={{ textDecoration: "none" }}>
					<Button className="homepage-to-pokedex" variant="outlined">
						Continue to Pokedex
					</Button>
				</Link>
			</section>
		</div>
	);
};

export default Homepage;
