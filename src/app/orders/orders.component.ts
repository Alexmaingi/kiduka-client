import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersService } from '../Services/orders.service';
import { RouterModule } from '@angular/router';
import { OrderUser } from '../Interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit{
  allOrdersUser!:Observable<OrderUser[]>
constructor(private ordersService:OrdersService){}
  ngOnInit(): void {
    this.allOrdersUser= this.ordersService.getUserOrders()
  }
removeOrder(order_id:string){
  this.ordersService.removeOrder(order_id).subscribe((res) => {
    this.allOrdersUser= this.ordersService.getUserOrders()
    console.log(res.message);
  });
}


}
