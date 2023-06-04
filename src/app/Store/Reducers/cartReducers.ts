import { CartStateInterface, Cart } from 'src/app/Interfaces'
import * as actions from '../Actions/actions'
import { createReducer, on } from '@ngrx/store'
const initialState: CartStateInterface ={

    isLoading:false,
    cart:[],
    error:'',
    loadCartSuccess:'',
    loadCartFailure:'',
    cart_id:''
   
}
export const cartReducers = createReducer(
    initialState, 
    on(actions.loadCartSuccess,(state, action)=>({
        ...state,
        isLoading:false,
        loadCartFailure:"",
        loadCartSuccess:"success",
        cart:action.cart
    })),
    on(actions.loadCartFailure,(state, action)=>({
        ...state,
        isLoading:false,
        loadCartFailure:action.error,
        loadCartSuccess:""
    })),
    //inc count
    on(actions.increaseCountSuccess,(state, action)=>({
      ...state,
        isLoading:false,
        loadCartFailure:"",
        loadCartSuccess:"success"
 
        
    })),
    on(actions.increaseCountFailure,(state, action)=>({
        ...state,
        isLoading:false,
        loadCartFailure:action.error,
        loadCartSuccess:""
    })),
    
    //decrease count
    on(actions.decreaseCountSuccess,(state, action)=>({
        ...state,
        isLoading:false,
        loadCartFailure:"",
        loadCartSuccess:"success",
        
    })),
    on(actions.decreaseCountFailure,(state, action)=>({
        ...state,
        isLoading:false,
        loadCartFailure:action.error,
        loadCartSuccess:""
    })),
    //delete cart item
    on(actions.deleteCartItemSuccess,(state, action)=>({
        ...state,
        isLoading:false,
        loadCartFailure:"",
        loadCartSuccess:"success",
        
    })),
    on(actions.deleteCartItemFailure,(state, action)=>({
        ...state,
        isLoading:false,
        loadCartFailure:action.error,
        loadCartSuccess:""
    })),
    on(actions.makeOrderSuccess,(state, action)=>({
        ...state,
        isLoading:false,
        loadCartFailure:"",
        success:action.message,
        
    })),
    on(actions.makeOrderFailure,(state, action)=>({
        ...state,
        isLoading:false,
        error:action.error,
        success:""
    })),
    )