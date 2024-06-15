import { createAction, props } from '@ngrx/store';

export const setPokemonName = createAction('[Pokemon] Set Pokemon Name', props<{ name: string }>());