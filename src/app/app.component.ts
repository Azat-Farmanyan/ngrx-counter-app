import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  countSelector,
  decrease,
  increase,
  reset,
  updatedAt,
  uptatedAtSelector,
} from './reducers/counter';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private store = inject(Store);

  title = 'ngrx-counter-app';

  updatedDate?: number;

  count$ = this.store.select(countSelector);
  cannotDecrease$ = this.count$.pipe(map((state) => state <= 0));

  uptatedAt$ = this.store.select(uptatedAtSelector);

  increase() {
    this.setDate();
    this.store.dispatch(increase());
  }
  decrease() {
    this.setDate();
    this.store.dispatch(decrease());
  }
  reset() {
    this.setDate();
    this.store.dispatch(reset());
  }

  setDate() {
    this.updatedDate = Date.now();
    this.store.dispatch(updatedAt({ updatedAt: Date.now() }));
  }

  get cannotDecrease() {
    return false;
  }
}
