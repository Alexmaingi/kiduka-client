import { Injectable } from '@angular/core';
import { Cart, Order, OrderAdmin, OrderUser, successMessages } from '../Interfaces';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private orders:Order[]=[{
    "order_id":"1",
    "productName":"mic",
    "image":"https://i.shgcdn.com/e20910ab-f171-4135-a9c7-112fe1f52290/-/format/auto/-/preview/3000x3000/-/quality/lighter/",
    "count":2,
    "isCancelled":1,
    "status":"pending"
  }]
  
  token = localStorage.getItem('token') as string

  constructor(private  http:HttpClient) { }
  makeOrder(): Observable<successMessages> {
    return this.http.post<successMessages>('http://localhost:4000/order/d1faadf7-015c-43dd-9638-366fbc20b87c', '',
    {
      headers: new HttpHeaders().set('token',this.token)}
    );
  }
  getUserOrders():Observable<OrderUser[]>{
    return this.http.get<OrderUser[]>('http://localhost:4000/order/d1faadf7-015c-43dd-9638-366fbc20b87c',
    {
      headers: new HttpHeaders().set('token',this.token)}
    );
  }
  removeOrder(id:string) :Observable<successMessages>{
    return this.http.put<successMessages>(`http://localhost:4000/order/delete/${id}`, '',
    {
      headers: new HttpHeaders().set('token',this.token)}
    );
  
  } 
  markAsDelivered(id:string){
    return this.http.put<successMessages>(`http://localhost:4000/order/delivered/${id}`, '',
    {
      headers: new HttpHeaders().set('token',this.token)}
    );
  }
  markAsDispatched(id:string){
    return this.http.put<successMessages>(`http://localhost:4000/order/dispatched/${id}`, '',
    {
      headers: new HttpHeaders().set('token',this.token)}
    );
  }
  getAllOrders(): Observable<OrderAdmin[]> {
    return this.http.get<OrderAdmin[]>('http://localhost:4000/order',
    {
      headers: new HttpHeaders().set('token',this.token)}
    );
  }
 

}
