import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrease, increase, reset, updatedAt } from './reducers/counter';
import { map } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  private actions$ = inject(Actions);

  updatedAt$ = createEffect(() =>
    this.actions$.pipe(
      ofType(increase, decrease, reset),
      map(() => updatedAt({ updatedAt: Date.now() }))
    )
  );
}
