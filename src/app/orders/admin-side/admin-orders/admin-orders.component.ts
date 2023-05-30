import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { OrderAdmin } from 'src/app/Interfaces';
import { OrdersService } from 'src/app/Services/orders.service';

@Component({
  selector: 'app-admin-orders',
  imports: [CommonModule, RouterModule],
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css'],
  standalone: true
})
export class AdminOrdersComponent  implements OnInit{
  ordersAdmin!:Observable<OrderAdmin[]>
constructor(public ordersService:OrdersService){}
  ngOnInit(): void {
    this.ordersAdmin = this.ordersService.getAllOrders()
  }
  markAsDelivered(order_id:string){
    this.ordersService.markAsDelivered(order_id).subscribe((res) => {
      this.ordersAdmin = this.ordersService.getAllOrders()
      console.log(res.message);
    });
  }
  markAsDispatched(order_id:string){
    this.ordersService.markAsDispatched(order_id).subscribe((res) => {
      this.ordersAdmin = this.ordersService.getAllOrders()
      console.log(res.message);
    });
  }
 
}
