import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, tap } from 'rxjs/operators';
import { sheetActions } from '../actions/sheet.actions';
import { HttpService } from '@services/http.service';
import { CharacterResponse } from '@definitions/types';
import { Observable, of, switchMap } from 'rxjs';

@Injectable()
export class SheetEffects {
  loadSheet = createEffect(() =>
    this.actions.pipe(
      ofType(sheetActions.loadSheet),
      switchMap(({ params }) =>
        (this.service.get(params) as Observable<CharacterResponse>).pipe(
          map((response: any) => {
            debugger;
            return sheetActions.loadSheetSuccess({
              character: response as CharacterResponse,
            });
          }),
          catchError(() => of(sheetActions.loadSheetFailure()))
        )
      )
    )
  );

  loadSheetFailure = createEffect(
    () =>
      this.actions.pipe(
        ofType(sheetActions.loadSheetFailure),
        tap(() => console.error('Could not load character sheet'))
      ),
    { dispatch: false }
  );

  constructor(private actions: Actions, private service: HttpService) {}
}
