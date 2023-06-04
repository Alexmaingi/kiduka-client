import { Injectable } from '@angular/core';
import * as actions from '../Actions/actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, mergeMap, of } from 'rxjs';
import { OrdersService } from 'src/app/Services/orders.service';

@Injectable()
export class OrdersEffects {
  constructor(
    private actions$: Actions,
    private orderService:OrdersService
  ) {}

}