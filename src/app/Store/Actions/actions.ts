import { createAction, props } from "@ngrx/store";
import {Cart, Product, newProduct} from '../../Interfaces/index'

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
props<{newProduct:newProduct}>())
export const addProductSuccess= createAction('[Products API] Add Product Success', 
props<{message:string}>())
export const addProductFailure= createAction('[Products API] Add Product Failure', 
props<{error:string}>())

//get one product
export const loadProduct= createAction('[Products] Get one Product',
props<{product_id:string}>())
export const loadProductSuccess= createAction('[Products API] Product Load Success', 
props<{products:Product[]}>())
export const loadProductFailure= createAction('[Products API] Product Load Failure', 
props<{error:string}>())

//delete product
export const deleteProduct= createAction('[Products] Delete Product',
props<{product_id:string}>())
export const deleteProductSuccess= createAction('[Products API] Delete Product Success', 
props<{message:string}>())
export const deleteProductFailure= createAction('[Products API] Delete Product Failure', 
props<{error:string}>())

//update product
export const updateProduct=createAction('[Products] update Product',
props<{prod_id:string,updatedProduct:Product}>())
export const updateProductSuccess= createAction('[Products API] update Product Success', 
props<{message:string}>())
export const updateProductFailure= createAction('[Products API] update Product Failure', 
props<{error:string}>())

//--------------------------------cart actions--------------

//get cart
export const loadCart= createAction('[Cart] Get Cart')
export const loadCartSuccess= createAction('[Cart API] Cart Load Success', 
props<{cart:Cart[]}>())
export const loadCartFailure= createAction('[Cart API] Cart Load Failure', 
props<{error:string}>())

//increase count of item in cart
export const increaseCount = createAction('[Cart] Increase Count',
props<{cart_id:string}>())
export const increaseCountSuccess= createAction('[Cart API] Increase Count Success', 
props<{message:string}>())
export const increaseCountFailure= createAction('[Cart API] Increase Count Failure', 
props<{error:string}>())

//decrease count of item in count
export const decreaseCount = createAction('[Cart] Decrease Count',
props<{cart_id:string}>())
export const decreaseCountSuccess= createAction('[Cart API] Decrease Count Success', 
props<{message:string}>())
export const decreaseCountFailure= createAction('[Cart API] Decrease Count Failure', 
props<{error:string}>())

//delete cart item
export const deleteCartItem = createAction('[Cart] delete Cart Item ',
props<{cart_id:string}>())
export const deleteCartItemSuccess= createAction('[Cart API] delete Cart Item  Success', 
props<{message:string}>())
export const deleteCartItemFailure= createAction('[Cart API] delete Cart Item  Failure', 
props<{error:string}>())


//make order 
