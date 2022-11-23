import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromOngoingEffects from '../reducers/ongoing-effects.reducer';

const { selectAll } = fromOngoingEffects.ongoingEffectsAdapter.getSelectors();

export const selectOngoingEffectsState =
  createFeatureSelector<fromOngoingEffects.State>(
    fromOngoingEffects.ongoingEffectsFeatureKey
  );

export const selectOngoingEffects = createSelector(
  selectOngoingEffectsState,
  selectAll
);
