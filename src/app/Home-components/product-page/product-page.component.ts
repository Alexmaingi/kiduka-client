import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Interfaces';
import { Store } from '@ngrx/store';
import {  selectProduct } from 'src/app/Store/Selectors/selector';
import { AppState } from 'src/app/Store/app.state';
import { loadProduct } from 'src/app/Store/Actions/actions';


@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css'],
})
export class ProductPageComponent implements OnInit{
 product$!:Observable<Product[]>

  prodId:string =''
  constructor(public productService:ProductService, private route:ActivatedRoute, private store:Store<AppState>){}
 
  ngOnInit(): void{
   this.prodId = this.route.snapshot.params['id']
    this.store.dispatch(loadProduct({product_id:this.prodId}))
    this.product$= this.store.select(selectProduct)
  }
  setProdId(prod_id:string){
    this.prodId=prod_id
  }
 

}
