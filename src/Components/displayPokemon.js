import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { getSinglePokemon } from "../Redux/reducers";
import {
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	Button,
} from "@mui/material";

import "../CSS/displaypokemon.css";

const DisplayPokemon = () => {
	const { id } = useParams();
	const pokemon = useSelector((state) => state.pokemon);
	const dispatch = useDispatch();
	let navigate = useNavigate();

	useEffect(() => {
		const getPokemon = async () => {
			dispatch(getSinglePokemon(id));
		};
		getPokemon();
	}, [id, dispatch]);

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

	const handleBackNavigate = () => {
		return navigate("/Pokedex/pokemon");
	};

	const handlePreviousNavigate = () => {
		navigate(
			pokemon.id - 1 > 0
				? `/Pokedex/pokemon/${pokemon.id - 1}`
				: `/Pokedex/pokemon/${1}`
		);
	};
	const handleNextNavigate = () => {
		navigate(
			pokemon.id + 1 <= 151
				? `/Pokedex/pokemon/${pokemon.id + 1}`
				: `/Pokedex/pokemon/${151}`
		);
	};

	return (
		<div className="pokemon-info-container">
			<div id="back-button-container">
				<Button
					id="back-navigate-btn"
					onClick={handleBackNavigate}
					variant="outlined"
				>
					Back
				</Button>
			</div>
			{pokemon !== undefined ? (
				<TableContainer id="pokemon-table-container" component={Paper}>
					<Table id="pokemon-info-table">
						<TableHead id="pokemon-info-header">
							<TableRow className="pokemon-info-row">
								<TableCell id="pokemon-name" align="center">
									{pokemon.name && pokemon.name.toUpperCase()}
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow className="pokemon-info-row">
								{pokemon.stats !== undefined &&
									pokemon.stats.map((stat, index) => {
										return (
											<TableCell
												key={index}
												align="center"
												className="pokemon-info-cell"
												style={{
													fontWeight: 500,
													fontSize: 20,
													width: 150,
													fontFamily: "Roboto",
													padding: 20,
												}}
											>
												{stat.stat.name &&
													stat.stat.name
														.charAt(0)
														.toUpperCase() +
														stat.stat.name.substring(
															1
														)}
											</TableCell>
										);
									})}
							</TableRow>
							<TableRow className="pokemon-info-row">
								{pokemon.stats !== undefined &&
									pokemon.stats.map((stat, index) => {
										return (
											<TableCell
												key={index}
												align="center"
												className="pokemon-info-cell"
												style={{
													fontSize: 18,
													padding: 20,
												}}
											>
												{stat.base_stat}
											</TableCell>
										);
									})}
							</TableRow>
							<TableRow className="pokemon-info-row">
								<TableCell
									align="center"
									className="pokemon-info-cell"
									style={{
										fontWeight: 500,
										fontSize: 20,
										width: 150,
										fontFamily: "Roboto",
										padding: 20,
									}}
								>
									Height (CM)
								</TableCell>
								<TableCell
									align="center"
									className="pokemon-info-cell"
									style={{
										fontWeight: 500,
										fontSize: 20,
										width: 150,
										fontFamily: "Roboto",
										padding: 20,
									}}
								>
									Weight (KG)
								</TableCell>
								<TableCell
									align="center"
									className="pokemon-info-cell"
									style={{
										fontWeight: 500,
										fontSize: 20,
										width: 150,
										fontFamily: "Roboto",
										padding: 20,
									}}
								>
									Types
								</TableCell>
								<TableCell
									align="center"
									className="pokemon-info-cell"
									style={{
										fontWeight: 500,
										fontSize: 20,
										width: 150,
										fontFamily: "Roboto",
										padding: 20,
									}}
								>
									Abilties
								</TableCell>
							</TableRow>
							<TableRow className="pokemon-info-row">
								<TableCell
									align="center"
									className="pokemon-info-cell"
									style={{ fontSize: 18, padding: 20 }}
								>
									{pokemon.height * 10}
								</TableCell>
								<TableCell
									align="center"
									className="pokemon-info-cell"
									style={{ fontSize: 18, padding: 20 }}
								>
									{pokemon.weight / 10}
								</TableCell>
								<TableCell
									align="center"
									className="pokemon-info-cell"
									style={{ fontSize: 18, padding: 20 }}
								>
									{pokemon.types && displayTypes()}
								</TableCell>
								<TableCell
									align="center"
									className="pokemon-info-cell"
									style={{ fontSize: 18, padding: 20 }}
								>
									{pokemon.abilities && displayAbilities()}
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</TableContainer>
			) : (
				<h1 id="loading">Loading</h1>
			)}
			<div
				id="next-previous-buttons"
				style={{ marginTop: "5%", padding: 20 }}
			>
				<Button
					id="prev-navigate-btn"
					onClick={handlePreviousNavigate}
					variant="outlined"
					style={{
						marginLeft: "3%",
						width: 125,
						height: 45,
						fontFamily: "Roboto",
						border: "3px solid",
						borderColor: "rgb(61, 152, 87)",
						fontWeight: 900,
						backgroundColor: "aliceblue",
					}}
				>
					Previous
				</Button>
				<Button
					id="next-navigate-btn"
					onClick={handleNextNavigate}
					variant="outlined"
					style={{
						float: "right",
						marginRight: "3%",
						width: 125,
						height: 45,
						fontFamily: "Roboto",
						border: "3px solid",
						borderColor: "rgb(61, 152, 87)",
						fontWeight: 900,
						backgroundColor: "aliceblue",
					}}
				>
					Next
				</Button>
			</div>
		</div>
	);
};

export default DisplayPokemon;
