import { Injectable } from '@angular/core';
import { Cart, Order, OrderAdmin, OrderUser } from '../Interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private orders:Order[]=[{
    "order_id":"1",
    "productName":"mic",
    "image":"https://i.shgcdn.com/e20910ab-f171-4135-a9c7-112fe1f52290/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
    "count":2,
    "isCancelled":1,
    "status":"pending"
  }]
  
  constructor() { }
  makeOrder(cart:Cart[]){
    for(let c of cart){
      let order:Order= {
        "order_id":c.id,
        "productName":c.productName,
        "image":c.image,
        "count":c.count,
        "isCancelled":0,
        "status":"pending"
      }
      this.orders.push(order)
    }

  }
  removeOrder(id:string){
     let order= this.orders.find(x=>x.order_id===id)
     if(order){
     order.isCancelled=1
     }
  }
  markAsDelivered(id:string){
    let order= this.orders.find(x=>x.order_id===id)
    if(order){
    order.status="delivered"
    }
  }
  markAsDispatched(id:string){
    let order= this.orders.find(x=>x.order_id===id)
    if(order){
    order.status="dispatched"
    }
  }
  getAllOrders(){
    return this.orders
  }
  // getAllOrdersByUserId(user_id:string){
  //   return this.orders.filter(x=>x.user_id===user_id) 

  // }
  

}
