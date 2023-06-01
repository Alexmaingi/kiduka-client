import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, RouterModule } from '@angular/router';
import { Product } from 'src/app/Interfaces';
import { ProductService } from 'src/app/Services/product.service';
import { AddProductComponent } from '../add-product/add-product.component';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
  standalone:true,
  imports:[CommonModule]
})
export class AdminProductsComponent {
  products!:Observable<Product[]>
  constructor(public productService:ProductService, private route:Router ){}
  

   ngOnInit(): void {
     this.products= this.productService.getAllProducts()
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