import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  Store } from '@ngrx/store';
import *as actions from '../../Store/Actions/actions';
import { selectAllProducts } from 'src/app/Store/Selectors/selector';
import { AppState } from 'src/app/Store/app.state';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
 

 constructor( private store:Store<AppState>){}
  
 public products$$= this.store.select(selectAllProducts)
  ngOnInit(): void {
    this.store.dispatch(actions.getAllProducts())
  }

  addToCart(prod_id:string){
this.store.dispatch(actions.addToCart({product_id:prod_id}))
}
  }

  //add if item is in cart remove btn


