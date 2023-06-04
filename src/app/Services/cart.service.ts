import { Injectable } from '@angular/core';
import { Cart,  successMessages } from '../Interfaces';
import { Observable, map, } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  totalPrice=0
 uid=localStorage.getItem('uid') as string

  constructor(private http:HttpClient) { }
token = localStorage.getItem('token') as string
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
  removeFromCart(id:string):Observable<successMessages>{
    return this.http.put<successMessages>(` http://localhost:4000/cart/${id}`,'',{
      headers: new HttpHeaders().set('token',this.token)
    })
}
 
 }

