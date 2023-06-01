import { Injectable } from '@angular/core';
import { Cart, addToCart, successMessages } from '../Interfaces';
import { Observable, findIndex, map, reduce } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalPrice=0
private cart:Cart[]=[{"productName": "unga",
"id": "3a4c80ae-6dab-4a14-884b-fc491dd4fc77",
"description": "utashiba",
"price": 5000,
"image": "https://i.shgcdn.com/80278c23-1489-4766-a1e8-ff5ee572e01a/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
"count": 1,
"cart_id":"1"},
{
"productName": "mic",
"id": "2",
"description": "utaskika",
"price": 4000,
"image": "https://i.shgcdn.com/80278c23-1489-4766-a1e8-ff5ee572e01a/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
"count": 1,
"cart_id":'1'}]
  constructor(private http:HttpClient) { }
  token = localStorage.getItem('token') as string

  getItemsInUserCart():Observable<Cart[]>{
    
    return this.http.get<Cart[]>('http://localhost:4000/cart/d1faadf7-015c-43dd-9638-366fbc20b87c',{
      headers:new HttpHeaders().set('token',this.token)
    })
  }
  addItemsToCart():Observable<successMessages>{
   
    return this.http.post<successMessages>(`http://localhost:4000/cart/2bf24f4f-8e62-45c5-8c1b-577f25ee4ce3`,'',{
      headers: new HttpHeaders().set('token',this.token)
    })
  }
  increaseItemCount(id:string):Observable<successMessages>{
  
    return this.http.put<successMessages>(` http://localhost:4000/cart/increment/${id}`,'',{
      headers: new HttpHeaders().set('token',this.token)
    })
   
  }
  decreaseItemCount(id:string):Observable<successMessages>{
    return this.http.put<successMessages>(` http://localhost:4000/cart/decrement/${id}`,'',{
      headers: new HttpHeaders().set('token',this.token)
    })
  }
  //http://localhost:4000/cart/589c11ab-217d-4ff3-80ac-129ecd7c62fd
  removeFromCart(id:string):Observable<successMessages>{
    return this.http.put<successMessages>(` http://localhost:4000/cart/${id}`,'',{
      headers: new HttpHeaders().set('token',this.token)
    })
}

setTotalPrice(){
  
 return this.getItemsInUserCart().pipe( 
      map((carts: Cart[]) => carts.reduce((totalPrice, cart) => totalPrice + cart.price * cart.count, 0))
  );
  
  }


 
 }

