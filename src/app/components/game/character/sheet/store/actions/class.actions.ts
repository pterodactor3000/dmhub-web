import { QueryParams } from '@definitions/types';
import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const classActions = createActionGroup({
  source: 'Class',
  events: {
    'Load Class': props<{ params: QueryParams }>(),
    'Load Class Success': props<{ classes: any }>(), // TODO: figure out the type
    'Load Class Failure': emptyProps(),
  },
});
