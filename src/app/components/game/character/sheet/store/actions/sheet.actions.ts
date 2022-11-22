import {
  CharacterResponse,
  OngoingEffectResponse,
  QueryParams,
} from '@definitions/types';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const sheetActions = createActionGroup({
  source: 'Sheet',
  events: {
    'Load Sheet': props<{ params: QueryParams }>(),
    'Load Sheet Success': props<{ character: CharacterResponse }>(),
    'Load Sheet Failure': emptyProps(),

    'Load Ongoing Effects': props<{ params: QueryParams[] }>(),
    'Load Ongoing Effects Success': props<{ effects: OngoingEffectResponse }>(),
    'Load Ongoing Effects Failure': emptyProps(),
  },
});
