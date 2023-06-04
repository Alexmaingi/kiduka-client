import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { CartStateInterface, Product, ProductStateInterface } from "src/app/Interfaces";
import * as actions from '../Actions/actions';
export const selectProducts = (state:AppState)=> state.products
export const selectCart =(state:AppState)=>state.cart

export const selectAllProducts = createSelector(
    selectProducts,
    (state:ProductStateInterface)=> state.product
)


export const selectProduct= createSelector(
    selectProducts,
    (state:ProductStateInterface)=> state.product
)

export const selectCartItems = createSelector(
    selectCart,
    (state:CartStateInterface)=> state.cart
)
