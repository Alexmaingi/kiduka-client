
import { Injectable } from '@angular/core';
import * as actions from '../Actions/actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CartService } from 'src/app/Services/cart.service';
import { catchError, exhaustMap, map, mergeMap, of, switchMap } from 'rxjs';

@Injectable()
export class CartEffects {
  constructor(
    private actions$: Actions,
    private cartService: CartService
  ) {}

  loadCart$ = createEffect(() =>{
   return this.actions$.pipe(
      ofType(actions.loadCart),
      mergeMap((action) =>
        this.cartService.getItemsInUserCart().pipe(
          map((cart) => {
            console.log(cart);
            return actions.loadCartSuccess({cart});
          }),
          catchError((error: any) => of(actions.loadProductFailure(error)))
        )
      )
    )  }
  );
  increaseCount$ = createEffect(() =>{
    return this.actions$.pipe(
       ofType(actions.increaseCount),
       switchMap((action) =>

         this.cartService.increaseItemCount(action.cart_id).pipe(
           map((cart) => {
             console.log(cart);
             return actions.increaseCountSuccess({message:cart.message});
           }),
           catchError((error: any) => of(actions.increaseCountFailure(error)))
         )
       ),switchMap(
        ()=>[actions.loadCart()]
       )
     )  }
   );
   decreaseCount$ = createEffect(() =>{
    return this.actions$.pipe(
       ofType(actions.decreaseCount),
       switchMap((action) =>
         this.cartService.decreaseItemCount(action.cart_id).pipe(
           map((cart) => {
             console.log(cart);
             return actions.decreaseCountSuccess({message:cart.message});
           }),
           catchError((error: any) => of(actions.decreaseCountFailure(error)))
         )
       ),switchMap(
        ()=>[actions.loadCart()]
       )
     )  }
   );

   deleteCartItem$ = createEffect(() =>{
    return this.actions$.pipe(
       ofType(actions.deleteCartItem),
       switchMap((action) =>
         this.cartService.removeFromCart(action.cart_id).pipe(
           map((cart) => {
             console.log(cart);
             return actions.deleteProductSuccess({message:cart.message});
           }),
           catchError((error: any) => of(actions.deleteCartItemSuccess(error)))
         )
       ),switchMap(
        ()=>[actions.loadCart()]
       )
     )  }
   )
 
  }