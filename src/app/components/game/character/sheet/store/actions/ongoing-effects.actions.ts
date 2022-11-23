import { OngoingEffectsResponse, QueryParams } from '@definitions/types';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const ongoingEffectsActions = createActionGroup({
  source: 'OngoingEffects',
  events: {
    'Load Ongoing Effects': props<{ params: QueryParams }>(),
    'Load Ongoing Effects Success': props<{
      effects: OngoingEffectsResponse[];
    }>(),
    'Load Ongoing Effects Failure': emptyProps(),
  },
});
