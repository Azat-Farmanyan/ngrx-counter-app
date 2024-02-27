import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrease, increase, reset, updatedAt } from './reducers/counter';
import { map } from 'rxjs/operators';

@Injectable()
export class AppEffects {
  updatedAt$ = createEffect(() =>
    this.actions$.pipe(
      ofType(increase, decrease, reset),
      map(() => updatedAt({ updatedAt: Date.now() }))
    )
  );
  private actions$ = inject(Actions);
}
