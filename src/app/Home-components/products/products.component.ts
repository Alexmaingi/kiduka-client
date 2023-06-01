import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Interfaces';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule ],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
 products!:Observable<Product[]>
 constructor(public productService:ProductService, ){}
  ngOnInit(): void {
    this.products= this.productService.getAllProducts()
  }

  //add if item is in cart remove btn

}
