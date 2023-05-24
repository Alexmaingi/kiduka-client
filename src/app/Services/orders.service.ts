import { Injectable } from '@angular/core';
import { Order } from '../Interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private orders:Order[]=[]
  constructor() { }
  makeOrder(){}
  removeOrder(){}
  markAsDelivered(){}
  markAsDispatched(){}
  getAllOrders(){}
  getAllOrdersByUserId(){}

}
