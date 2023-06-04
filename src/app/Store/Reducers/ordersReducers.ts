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
   
    )