import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersService } from '../Services/orders.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent {
constructor(private ordersService:OrdersService){}

removeOrder(order_id:string){
  this.ordersService.removeOrder(order_id)
}
markAsDelivered(order_id:string){
  this.ordersService.markAsDelivered(order_id)
}
markAsDispatched(order_id:string){
  this.ordersService.markAsDispatched(order_id)
}
getAllOrders(){
 return this.ordersService.getAllOrders()
}
// getAllOrdersByUserId(user_id:string){
//  this.ordersService.getAllOrdersByUserId(user_id)
// }
}
