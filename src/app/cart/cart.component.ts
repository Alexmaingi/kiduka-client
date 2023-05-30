import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../Services/cart.service';
import { OrdersService } from '../Services/orders.service';
import { Cart, Order } from '../Interfaces';
import { Observable } from 'rxjs';
import { Router, RouterModule } from '@angular/router';

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
    private route: Router
  ) {}
  cart!: Observable<Cart[]>;
  ngOnInit(): void {
    this.cart = this.cartService.getItemsInUserCart();
    this.totalPrice = this.cartService.setTotalPrice();
  }
  addToCart() {
    this.cartService.addItemsToCart().subscribe((res) => {
      console.log(res.message);
    });
  }

  addCount(cart_id: string) {
    this.cartService.increaseItemCount(cart_id).subscribe((res) => {
      this.cart = this.cartService.getItemsInUserCart();
      this.totalPrice = this.cartService.setTotalPrice();
      console.log(res.message);
    });
  }
  minusCount(cart_id: string) {
    this.cartService.decreaseItemCount(cart_id).subscribe((res) => {
      this.cart = this.cartService.getItemsInUserCart();
      this.totalPrice = this.cartService.setTotalPrice();
      console.log(res.message);
    });
  }
  deleteItem(cart_id: string) {
    this.cartService.removeFromCart(cart_id).subscribe((res) => {
      this.cart = this.cartService.getItemsInUserCart();
      this.totalPrice = this.cartService.setTotalPrice();
      console.log(res.message);
    });
  }

  makeOrder() {
    this.orderService.makeOrder().subscribe((res) => {
      this.cart = this.cartService.getItemsInUserCart();
      this.totalPrice = this.cartService.setTotalPrice();
      console.log(res.message);
    });
  }
}
