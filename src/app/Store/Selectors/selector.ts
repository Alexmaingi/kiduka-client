import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { Cart, CartStateInterface, Product, ProductStateInterface } from "src/app/Interfaces";
import * as actions from '../Actions/actions';
export const selectProducts = (state:AppState)=> state.products
export const selectCartState =createFeatureSelector<CartStateInterface>('cart')

export const selectAllProducts = createSelector(
    selectProducts,
    (state:ProductStateInterface)=> state.product
)


export const selectProduct= createSelector(
    selectProducts,
    (state:ProductStateInterface)=> state.product
)

export const selectCartItems = createSelector(
    selectCartState,
    (state:CartStateInterface)=> state.cart
)
export const selectCartId = createSelector(
    selectCartState,
    (state)=> state.cart_id
)
export const selectTotalPrice = 
  createSelector(
    selectCartItems,
    (items: Cart[]) => {
        let totalPrice=0
      items.forEach((item)=>{
       totalPrice = (item.price * item.count) + totalPrice
      })
      return totalPrice
    }
  );

