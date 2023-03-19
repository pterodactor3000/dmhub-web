import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromClass from '../reducers/class.reducer';

const { selectEntities } = fromClass.classAdapter.getSelectors(); // TODO: finish

export const selectClassState = createFeatureSelector<fromClass.State>(
  fromClass.classFeatureKey
);

export const selectClass = createSelector(selectClassState, selectEntities);
