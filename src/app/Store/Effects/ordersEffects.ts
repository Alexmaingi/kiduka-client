import { Injectable } from '@angular/core';
import * as actions from '../Actions/actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, mergeMap, of, switchMap } from 'rxjs';
import { OrdersService } from 'src/app/Services/orders.service';

@Injectable()
export class OrdersEffects {
  constructor(
    private actions$: Actions,
    private orderService:OrdersService
  ) {}
  makeOrder$ = createEffect(() =>{
    return this.actions$.pipe(
       ofType(actions.makeOrder),
       switchMap((action) =>
         this.orderService.makeOrder().pipe(
           map((o) => {
             console.log(o);
             return actions.makeOrderSuccess({message:o.message});
           }),
           catchError((error: any) => of(actions.makeOrderFailure(error)))
         )
       ),switchMap(
        ()=>[actions.loadCart()]
       )
     )  }
   );
}