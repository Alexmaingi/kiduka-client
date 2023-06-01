import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/Interfaces';

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
  constructor(public productService:ProductService, private route:ActivatedRoute){}

  ngOnInit(): void{
    this.prodId = this.route.snapshot.params['id']
     this.product$ =this.productService.getProduct(this.prodId)
     
   
  }
  setProdId(prod_id:string){
    this.prodId=prod_id
  }
 

}
