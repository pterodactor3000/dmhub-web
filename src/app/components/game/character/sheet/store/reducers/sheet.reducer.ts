import { CharacterResponse, QueryParams } from '@definitions/types';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { sheetActions } from '../actions/sheet.actions';

export interface SheetState {
  character?: CharacterResponse;
  query?: QueryParams;
}

export interface State extends EntityState<SheetState> {}

export const sheetFeatureKey = 'sheet';
export const sheetAdapter: EntityAdapter<SheetState> =
  createEntityAdapter<SheetState>();

export const initialState: State = sheetAdapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(sheetActions.loadSheet, (state, { params }) =>
    sheetAdapter.setOne({ query: params }, state)
  ),
  on(sheetActions.loadSheetSuccess, (state, { character }) =>
    sheetAdapter.setOne({ character }, state)
  )
);
