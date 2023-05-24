import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../Services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  totalPrice =0
  constructor(private cartService:CartService){}
  
  getCart(){
       
    return this.cartService.getItemsInUserCart()
  }

  addCount(id:string){
    this.cartService.increaseItemCount(id)
  }
  minusCount(id:string){
      this.cartService.decreaseItemCount(id)
  }
  deleteItem(id:string){
    this.cartService.removeFromCart(id)
  }
  getTotalPrice(){
  // return this.cartService.setTotalPrice()

  this.totalPrice= this.getCart().reduce((prev,curr)=>{
    return prev + (curr.price * curr.count)
   },0)
   return this.totalPrice
  }
}
