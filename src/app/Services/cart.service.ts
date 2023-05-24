import { Injectable } from '@angular/core';
import { Cart } from '../Interfaces';
import { findIndex } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
private cart:Cart[]=[{"productName": "unga",
"id": "3a4c80ae-6dab-4a14-884b-fc491dd4fc77",
"description": "utashiba",
"price": 5000,
"image": "https://i.shgcdn.com/80278c23-1489-4766-a1e8-ff5ee572e01a/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
"count": 1},
{
"productName": "mic",
"id": "2",
"description": "utaskika",
"price": 4000,
"image": "https://i.shgcdn.com/80278c23-1489-4766-a1e8-ff5ee572e01a/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
"count": 1}]
  constructor() { }

  getItemsInUserCart(){
    return this.cart
  }
  increaseItemCount(id:string){
   let item= this.cart.find(x=>x.id===id)
   if (item){
    item.count = item.count +1
    
   }else {
      //do something
   }
   
  }
  decreaseItemCount(id:string){
    let item= this.cart.find(x=>x.id===id)
    if (item){
      
     item.count = item.count -1
    
     if(!item.count){
      this.cart.splice(this.cart.indexOf(item),1)
     }
    }else {
       //do something
    }
  }
  removeFromCart(id:string){
    let item= this.cart.find(x=>x.id===id)
    if (item){
    this.cart.splice(this.cart.indexOf(item),1)
  }
}

  // setTotalPrice(){
  //  this.totalPrice= this.cart.reduce((prev,curr)=>{
  //    return prev + curr.price
  //   },0)
  //   return this.totalPrice
  // }
 }
