import {  OrdersStateInterface } from 'src/app/Interfaces'
import * as actions from '../Actions/actions'
import { createReducer, on } from '@ngrx/store'
const initialState: OrdersStateInterface ={

    isLoading:false,
    order:[],
    error:'',
    success:'',
    order_id:''
   
}
export const ordersReducers = createReducer(
    initialState, 
    on(actions.getUserOrdersSuccess,(state, action)=>({
        ...state,
        isLoading:false,
        error:'',
        order:action.orders
        
    })),
    on(actions.loadCartFailure,(state, action)=>({
        ...state,
        isLoading:false,
        error:action.error,
        success:""
    })),
    )