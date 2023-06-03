import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { Product } from 'src/app/Interfaces';
import { ProductService } from 'src/app/Services/product.service';
import { AppState } from 'src/app/Store/app.state';
import { Store } from '@ngrx/store';
import * as actions from '../../../../Store/Actions/actions'
import { selectAllProducts } from 'src/app/Store/Selectors/selector';
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
  standalone:true,
  imports:[CommonModule, RouterModule]
})
export class AdminProductsComponent {
  products=this.store.select(selectAllProducts)
  constructor(public productService:ProductService, private route:Router, private store:Store<AppState> ){}
  

   ngOnInit(): void {
     this.store.dispatch(actions.getAllProducts())
   }
   delete(prod_id:string){
    this.productService.deleteProduct(prod_id).subscribe(res=>{
      console.log(res.message);
      this.products = this.productService.getAllProducts()
    })
  }
    update(product:Product){
      this.productService.accessAddProduct(product);
      this.route.navigateByUrl('/addProduct');
    }
}
