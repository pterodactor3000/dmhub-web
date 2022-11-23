import { OngoingEffectsResponse } from '@definitions/types';
import { EntityAdapter, createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { ongoingEffectsActions } from '../actions/ongoing-effects.actions';

export const ongoingEffectsFeatureKey = 'ongoingEffects';

export interface State extends EntityState<OngoingEffectsResponse> {}

export const ongoingEffectsAdapter: EntityAdapter<OngoingEffectsResponse> =
  createEntityAdapter<OngoingEffectsResponse>({
    selectId: (effect: OngoingEffectsResponse) => effect.id as string,
  });

export const initialState: State = ongoingEffectsAdapter.getInitialState();

export const reducer = createReducer(
  initialState,
  on(ongoingEffectsActions.loadOngoingEffectsSuccess, (state, { effects }) =>
    ongoingEffectsAdapter.upsertMany(effects, state)
  )
);
