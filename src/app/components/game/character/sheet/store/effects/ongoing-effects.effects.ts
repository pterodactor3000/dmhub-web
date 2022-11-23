import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import {
  OngoingEffectsListResponse,
  ResponsesTypes,
  Guid,
  OngoingEffectsResponse,
} from '@definitions/types';
import { HttpService } from '@services/http.service';
import { ongoingEffectsActions } from '../actions/ongoing-effects.actions';

@Injectable()
export class OngoingEffectsEffects {
  constructor(private actions: Actions, private service: HttpService) {}

  loadOngoingEffects = createEffect(() => {
    return this.actions.pipe(
      ofType(ongoingEffectsActions.loadOngoingEffects),
      switchMap(({ params }) =>
        (
          this.service.get(params) as Observable<OngoingEffectsListResponse>
        ).pipe(
          map((response: ResponsesTypes) => {
            return ongoingEffectsActions.loadOngoingEffectsSuccess({
              effects: Object.keys(response).map(
                (key: Guid) => (response as OngoingEffectsListResponse)[key]
              ) as OngoingEffectsResponse[],
            });
          }),
          catchError(() =>
            of(ongoingEffectsActions.loadOngoingEffectsFailure())
          )
        )
      )
    );
  });

  loadOngoingEffectsFailure = createEffect(
    () => {
      return this.actions.pipe(
        ofType(ongoingEffectsActions.loadOngoingEffectsFailure),
        tap(() => console.error('Could not load ongoing effects list'))
      );
    },
    { dispatch: false }
  );
}
