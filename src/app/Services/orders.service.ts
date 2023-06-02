import { Injectable } from '@angular/core';
import { Cart, Order, OrderAdmin, OrderUser, successMessages } from '../Interfaces';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
   
 token = localStorage.getItem('token') as string
 uid=localStorage.getItem('uid') as string
 // uid ='d1faadf7-015c-43dd-9638-366fbc20b87c'
  //token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxZmFhZGY3LTAxNWMtNDNkZC05NjM4LTM2NmZiYzIwYjg3YyIsIm5hbWUiOiJ5YWFuaSB0dSIsImVtYWlsIjoiNzY1NDZAZXhhbXBsZS5jb20iLCJwaG9uZU51bWJlciI6NzQ0MzkzNDIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4NTcxMzUyNCwiZXhwIjoxNjg2MDczNTI0fQ.FBeUAjs_o-lDCxVK1LZS0rskhxoneZEmVqhDQIesuUA'

  constructor(private  http:HttpClient) { }
  makeOrder(): Observable<successMessages> {
    return this.http.post<successMessages>(`http://localhost:4000/order/${this.uid}`, '',
    {
      headers: new HttpHeaders().set('token',this.token)}
    );
  }
  getUserOrders():Observable<OrderUser[]>{
    return this.http.get<OrderUser[]>(`http://localhost:4000/order/${this.uid}`,
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
