import { createReducer, on, Action } from '@ngrx/store';
import { PokemonState } from './pokemon.state';
import * as PokemonActions from './pokemon.actions'; 

const initialState: PokemonState = {
  pokemonName: null,
};

export const pokemonReducer = createReducer(
  initialState,
  on(PokemonActions.setPokemonName, (state, { name }) => ({
    ...state,
    pokemonName: name,
  }))
);

export function reducer(state: PokemonState | undefined, action: Action) {
  return pokemonReducer(state, action);
}
