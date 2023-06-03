import { State, createReducer, createSelector, on } from "@ngrx/store";
import { Product, ProductStateInterface } from "src/app/Interfaces";
import * as actions from '../Actions/actions'
import { state } from "@angular/animations";
const initialState: ProductStateInterface ={

    isLoading:false,
    product:[],
    error:null,
    p_id:'',
    getOneProductSuccess:'',
    addToCartSuccess:''
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
    on(actions.loadProduct,(state,{product_id})=>({
        ...state,
        isLoading:true,
        p_id:product_id
    })),
    on(actions.loadProductSuccess,(state, action)=>({
        ...state,
        //  tasks = tasks.filter(task => task.id !== state.deleteTaskId);
        
        product: [action.products.find(p=>p.id===state.p_id) as Product],
        isLoading:false,
        error:null,
    })),
    on(actions.loadProductFailure,(state, {error})=>({
        ...state,
        isLoading:false,
        error:error,
    })),
    on(actions.addToCart,(state,{product_id})=>({
        ...state,
        isLoading:true,
        p_id:product_id
    })),
    on(actions.addToCartSuccess,(state, action)=>({
        ...state,
        //  tasks = tasks.filter(task => task.id !== state.deleteTaskId);
        isLoading:false,
        error:null,
        addToCartSuccess:action.message
    })),
    on(actions.addToCartFailure,(state, {error})=>({
        ...state,
        isLoading:false,
        error:error,
    }))

    
    )

