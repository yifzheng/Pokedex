import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Homepage = () => {
	return (
		<div className="homepage">
			<header className="homepage-header">
				<h1>Welcome to the Generation 1 Pokedex</h1>
			</header>
			<section className="hoempage-continue">
				<Link to="/pokedex" style={{ textDecoration: 'none' }}>
					<Button className="homepage-to-pokedex" variant="outlined">
						Continue to Pokedex
					</Button>
				</Link>
			</section>
		</div>
	);
};

export default Homepage;
