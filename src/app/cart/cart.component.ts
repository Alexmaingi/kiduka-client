import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../Services/cart.service';
import { OrdersService } from '../Services/orders.service';
import { Cart, Order } from '../Interfaces';
import { Observable } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectCartItems } from '../Store/Selectors/selector';
import { AppState } from '../Store/app.state';
import { decreaseCount, deleteCartItem, increaseCount, loadCart } from '../Store/Actions/actions';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  totalPrice!: Observable<number>;
  constructor(
    public cartService: CartService,
    public orderService: OrdersService,
    private route: Router,
    private store:Store<AppState>

  ) {}
  cart= this.store.select(selectCartItems)
  ngOnInit(): void {
   this.store.dispatch(loadCart())
    this.totalPrice = this.cartService.setTotalPrice();
  }


  addCount(cart_id: string) {
    this.store.dispatch(increaseCount({cart_id:cart_id}))
  }
  minusCount(cart_id: string) {
   this.store.dispatch(decreaseCount({cart_id:cart_id}))
  }
  deleteItem(cart_id: string) {
  this.store.dispatch(deleteCartItem({cart_id:cart_id}))
  }

  makeOrder() {
    this.orderService.makeOrder().subscribe((res) => {
      this.cart = this.cartService.getItemsInUserCart();
      this.totalPrice = this.cartService.setTotalPrice();
      console.log(res.message);
    });
  }
}
