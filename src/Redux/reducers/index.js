import axios from "axios";

import { GOT_ALL_GEN1_POKEMON, GOT_SINGLE_POKEMON } from "./actiontypes";

const initialState = {
	pokemons: [],
	pokemon: {},
};

// GET -> ALL 150 pokemon
const gotAllGen1Pokemon = (data) => {
	return {
		type: GOT_ALL_GEN1_POKEMON,
		data,
	};
};

export const getAllGen1Pokemon = () => {
	return async (dispatch) => {
		try {
			const pokemons = await axios.get(
				"https://pokeapi.co/api/v2/pokemon?limit=151"
			);
			dispatch(gotAllGen1Pokemon(pokemons.data.results));
		} catch (error) {
			console.error("Get Error: ", error);
		}
	};
};

// GET -> 1 pokemon
const gotSinglePokemon = (data) => {
	return {
		type: GOT_SINGLE_POKEMON,
		data,
	};
};

export const getSinglePokemon = (id) => {
	return async (dispatch) => {
		try {
			const pokemon = await axios.get(
				`https://pokeapi.co/api/v2/pokemon/${id}`
			);
			dispatch(gotSinglePokemon(pokemon.data));
		} catch (error) {
			console.error("Get Error: ", error);
		}
	};
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case GOT_ALL_GEN1_POKEMON:
			return {
				...state,
				pokemons: action.data,
			};
		case GOT_SINGLE_POKEMON:
			return {
				...state,
				pokemon: action.data,
			};
		default:
			return state;
	}
};

export default rootReducer;
