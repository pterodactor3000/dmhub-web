import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, tap } from 'rxjs/operators';
import { sheetActions } from '../actions/sheet.actions';
import { HttpService } from '@services/http.service';
import { CharacterResponse, ResponsesTypes } from '@definitions/types';
import { Observable, of, switchMap } from 'rxjs';

@Injectable()
export class SheetEffects {
  constructor(private actions: Actions, private service: HttpService) {}

  loadSheet = createEffect(() => {
    return this.actions.pipe(
      ofType(sheetActions.loadSheet),
      switchMap(({ params }) =>
        (this.service.get(params) as Observable<CharacterResponse>).pipe(
          map((response: ResponsesTypes) => {
            return sheetActions.loadSheetSuccess({
              character: response as CharacterResponse,
            });
          }),
          catchError(() => of(sheetActions.loadSheetFailure()))
        )
      )
    );
  });

  loadSheetFailure = createEffect(
    () => {
      return this.actions.pipe(
        ofType(sheetActions.loadSheetFailure),
        tap(() => console.error('Could not load character sheet'))
      );
    },
    { dispatch: false }
  );

  loadOngoingEffects = createEffect(() => {
    return this.actions.pipe(
      ofType(sheetActions.loadOngoingEffects),
      switchMap(({ params }) => {
        // TODO: finish it!
      })
    );
  });
}
