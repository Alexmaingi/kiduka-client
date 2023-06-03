import { createAction, createActionGroup, props } from "@ngrx/store";
import {Product} from '../../Interfaces/index'

//get all products
export const getAllProducts= createAction('[Products] Get All Products')
export const loadProductsSuccess= createAction('[Products API] Products Load Success', 
props<{products:Product[]}>())
export const loadProductsFailure= createAction('[Products API] Products Load Failure', 
props<{error:string}>())

//add item to cart 

export const addToCart= createAction('[Products] Add To Cart',
props<{product_id:string}>())
export const addToCartSuccess= createAction('[Products API] Add to Cart Success', 
props<{message:string}>())
export const addToCartFailure= createAction('[Products API] Add to Cart Failure', 
props<{error:string}>())


//add product 

export const addProduct=createAction('[Products] Add Product',
props<{product:Product}>())


//get one product
export const loadProduct= createAction('[Products] Get one Product',
props<{product_id:string}>())
export const loadProductSuccess= createAction('[Products API] Product Load Success', 
props<{products:Product[]}>())
export const loadProductFailure= createAction('[Products API] Product Load Failure', 
props<{error:string}>())