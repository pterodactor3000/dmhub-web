import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { classActions } from '../actions/class.actions';

export interface State {}

export const classFeatureKey = 'class';
export const classAdapter: EntityAdapter<CharacterResponse> =
  createEntityAdapter<CharacterResponse>({
    selectId: (character: CharacterResponse) => character.id as string,
  });

// TODO: finish add adapter
export const initialState: State = {};

export const reducer = createReducer(
  initialState,
  on(classActions.loadClass, (state) => state),
  on(classActions.loadClassSuccess, (state, action) => state),
  on(classActions.loadClassFailure, (state, action) => state)
);
