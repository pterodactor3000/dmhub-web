import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { classActions } from '../actions/class.actions';
import { HttpService } from '@services/http.service';

@Injectable()
export class ClassEffects {
  constructor(private actions: Actions, private service: HttpService) {}

  loadClass = createEffect(() => {
    return this.actions.pipe(
      ofType(classActions.loadClass),
      switchMap(({ params }) =>
        (this.service.get(params) as Observable<any>).pipe(
          map((data) => classActions.loadClassSuccess({ classes: data })),
          catchError(() => of(classActions.loadClassFailure()))
        )
      )
    );
  });

  loadClassFailure = createEffect(
    () => {
      return this.actions.pipe(
        ofType(classActions.loadClassFailure),
        tap(() => console.error('Could not load ongoing effects list'))
      );
    },
    { dispatch: false }
  );
}
