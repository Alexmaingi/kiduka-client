import { createReducer, on } from "@ngrx/store";
import { Product, ProductStateInterface } from "src/app/Interfaces";
import * as actions from '../Actions/actions'
const initialState: ProductStateInterface ={

    isLoading:false,
    product:[],
    error:null,
    p_id:'',
    getOneProductSuccess:'',
    addToCartSuccess:'',
    addToCartFailure:'',
    deleteProductSuccess:'',
    deleteProductFailure:'',
    addProductSuccess:'',
  addProductFailure:'',
  updateProductSuccess:'',
  updateProductFailure:''
}
export const productReducers = createReducer(
    initialState, 
    on(actions.getAllProducts,(state)=>{
        return{
        ...state,
        isLoading: true}}
    ),
    on(actions.loadProductsSuccess,(state, {products})=>({
        ...state,
        product:products,
        isLoading:false,
        error:null,
    })),
    on(actions.loadProductsFailure,(state, {error})=>({
        ...state,
        isLoading:false,
        error:error,
    })),

    //get one prooduct
    on(actions.loadProduct,(state,{product_id})=>({
        ...state,
        isLoading:true,
        p_id:product_id
    })),
    on(actions.loadProductSuccess,(state, action)=>({
        ...state,       
        product: [action.products.find(p=>p.id===state.p_id) as Product],
        isLoading:false,
        error:null,
    })),
    on(actions.loadProductFailure,(state, {error})=>({
        ...state,
        isLoading:false,
        error:error,
    })),
      
    //add to cart
    on(actions.addToCart,(state,{product_id})=>({
        ...state,
        isLoading:true,
        p_id:product_id
    })),
    on(actions.addToCartSuccess,(state, action)=>({
        ...state,
        isLoading:false,
        error:null,
        addToCartSuccess:action.message
    })),
    on(actions.addToCartFailure,(state, {error})=>({
        ...state,
        isLoading:false,
        error:error,
    })),

    //delete product
    on(actions.deleteProduct,(state,{product_id})=>({
        ...state,
        isLoading:true,
        p_id:product_id
    })),
    on(actions.deleteProductSuccess,(state, action)=>({
        ...state,
        isLoading:false,
        error:null,
        addToCartSuccess:action.message

    })),
    on(actions.deleteProductFailure,(state, action)=>({
        ...state,
        isLoading:false,
        deleteProductFailure:action.error,
    })),
     ///////add product---nb, no add product, no state change
     on(actions.addProductSuccess,(state, action)=>({
        ...state,
        isLoading:false,
        error:null,
        addProductSuccess:action.message

    })),
    on(actions.addProductFailure,(state, action)=>({
        ...state,
        isLoading:false,
        addProductFailure:action.error,
    })), 

    ////update product
    on(actions.updateProductSuccess,(state, action)=>({
        ...state,
        isLoading:false,
        error:null,
        updateProductSuccess:action.message

    })),
    on(actions.updateProductFailure,(state, action)=>({
        ...state,
        isLoading:false,
        updateProductFailure:action.error,
    })), 
    )

