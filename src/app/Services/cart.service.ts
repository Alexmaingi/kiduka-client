import { Injectable } from '@angular/core';
import { Cart, addToCart, successMessages } from '../Interfaces';
import { Observable, findIndex, map, reduce } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalPrice=0
 uid=localStorage.getItem('uid') as string
// uid ='d1faadf7-015c-43dd-9638-366fbc20b87c'

  constructor(private http:HttpClient) { }
token = localStorage.getItem('token') as string
//token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxZmFhZGY3LTAxNWMtNDNkZC05NjM4LTM2NmZiYzIwYjg3YyIsIm5hbWUiOiJ5YWFuaSB0dSIsImVtYWlsIjoiNzY1NDZAZXhhbXBsZS5jb20iLCJwaG9uZU51bWJlciI6NzQ0MzkzNDIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4NTcxMzUyNCwiZXhwIjoxNjg2MDczNTI0fQ.FBeUAjs_o-lDCxVK1LZS0rskhxoneZEmVqhDQIesuUA'
  getItemsInUserCart():Observable<Cart[]>{
    
    return this.http.get<Cart[]>(`http://localhost:4000/cart/${this.uid}`,{
      headers:new HttpHeaders().set('token',this.token)
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

