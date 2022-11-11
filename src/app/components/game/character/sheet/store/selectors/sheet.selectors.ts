import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSheet from '../reducers/sheet.reducer';

const { selectAll } = fromSheet.sheetAdapter.getSelectors();

export const selectSheetState = createFeatureSelector<fromSheet.State>(
  fromSheet.sheetFeatureKey
);

export const selectSheet = createSelector(selectSheetState, selectAll);
