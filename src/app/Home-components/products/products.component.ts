import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  Store } from '@ngrx/store';
import *as actions from '../../Store/Actions/actions';
import { selectAllProducts, selectSuccessMessageAddToCart } from 'src/app/Store/Selectors/selector';
import { AppState } from 'src/app/Store/app.state';
import { Observable } from 'rxjs';


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

 success$!:Observable<string>
  ngOnInit(): void {
    this.store.dispatch(actions.getAllProducts())
  }

  addToCart(prod_id:string){
this.store.dispatch(actions.addToCart({product_id:prod_id}))
this.success$=this.store.select(selectSuccessMessageAddToCart)
}
  }

  //add if item is in cart remove btn


