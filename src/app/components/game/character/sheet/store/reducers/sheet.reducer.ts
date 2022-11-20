import { CharacterResponse } from '@definitions/types';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { sheetActions } from '../actions/sheet.actions';

export interface State extends EntityState<CharacterResponse> {}

export const sheetFeatureKey = 'sheet';
export const sheetAdapter: EntityAdapter<CharacterResponse> =
  createEntityAdapter<CharacterResponse>({
    selectId: (character: CharacterResponse) => character.id as string,
  });

export const initialState: State = sheetAdapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(sheetActions.loadSheetSuccess, (state, { character }) =>
    sheetAdapter.upsertOne(character, state)
  )
);
