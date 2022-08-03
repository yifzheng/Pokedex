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

	const handleBackNavigate = () => {
		return navigate("/pokedex");
	};

	const handlePreviousNavigate = () => {
		navigate(
			pokemon.id - 1 > 0
				? `/pokedex/pokemon/${pokemon.id - 1}`
				: `/pokedex/pokemon/${1}`
		);
		return window.location.reload();
	};
	const handleNextNavigate = () => {
		navigate(
			pokemon.id + 1 <= 151
				? `/pokedex/pokemon/${pokemon.id + 1}`
				: `/pokedex/pokemon/${151}`
		);
		return window.location.reload();
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
							<TableRow>
								{pokemon.stats !== undefined &&
									pokemon.stats.map((stat, index) => {
										return (
											<TableCell
												key={index}
												align="center"
												className="pokemon-info-cell"
											>
												{stat.base_stat}
											</TableCell>
										);
									})}
							</TableRow>
							<TableRow>
								<TableCell
									align="center"
									className="pokemon-info-cell"
								>
									Height (CM)
								</TableCell>
								<TableCell
									align="center"
									className="pokemon-info-cell"
								>
									Weight (KG)
								</TableCell>
								<TableCell
									align="center"
									className="pokemon-info-cell"
								>
									Types
								</TableCell>
								<TableCell
									align="center"
									className="pokemon-info-cell"
								>
									Abilties
								</TableCell>
							</TableRow>
							<TableRow>
								<TableCell
									align="center"
									className="pokemon-info-cell"
								>
									{pokemon.height * 10}
								</TableCell>
								<TableCell
									align="center"
									className="pokemon-info-cell"
								>
									{pokemon.weight / 10}
								</TableCell>
								<TableCell
									align="center"
									className="pokemon-info-cell"
								>
									{pokemon.types && displayTypes()}
								</TableCell>
								<TableCell
									align="center"
									className="pokemon-info-cell"
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
			<div id="next-previous-buttons">
				<Button
					id="prev-navigate-btn"
					onClick={handlePreviousNavigate}
					variant="outlined"
				>
					Previous
				</Button>
				<Button
					id="next-navigate-btn"
					onClick={handleNextNavigate}
					variant="outlined"
				>
					Next
				</Button>
			</div>
		</div>
	);
};

export default DisplayPokemon;
