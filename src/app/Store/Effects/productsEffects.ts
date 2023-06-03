import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, exhaustMap, catchError } from 'rxjs/operators';

import * as actions from '../Actions/actions';
import { ProductService } from 'src/app/Services/product.service';

@Injectable()
export class ProductsEffects {

  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  getProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getAllProducts),
      exhaustMap(action =>
        this.productService.getAllProducts().pipe(
          map(products => {
            console.log("response:::", products)
            return actions.loadProductsSuccess({products})
          }),
          catchError((error: any) => of(actions.loadProductsFailure(error))))
      )
    )
  );
  getOneProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.loadProduct),
      exhaustMap(action =>
        this.productService.getProduct(action.product_id).pipe(
          map(products => {
        
            console.log(products);
            
            return actions.loadProductSuccess({products})
          }),
          catchError((error: any) => of(actions.loadProductFailure(error))))
      )
    )
  );
  addToCart$ = createEffect(() =>
  this.actions$.pipe(
    ofType(actions.addToCart),
    exhaustMap(action =>
      this.productService.addItemsToCart(action.product_id).pipe(
        map(products => {
      
          console.log(products);
          
          return actions.addToCartSuccess({message:products.message})
        }),
        catchError((error: any) => of(actions.loadProductFailure(error))))
    )
  )
);
  
        }
