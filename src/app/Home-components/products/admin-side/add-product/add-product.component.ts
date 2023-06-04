import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/Interfaces';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/Store/app.state';
import { addProduct, updateProduct } from 'src/app/Store/Actions/actions';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  constructor(public productservice:ProductService, private fb:FormBuilder, private store:Store<AppState>){}
 
form!:FormGroup
errorMessage!:string
isUpdating=false
updatedProduct: Product|null = this.productservice.updatedProduct

ngOnInit(): void {

  if(this.updatedProduct){
    this.isUpdating=true
    this.form = this.fb.group({
      productName: [this.updatedProduct['productName'], [Validators.required]],
      inStock: [this.updatedProduct['inStock'], [Validators.required]],
      price: [this.updatedProduct['price'], [Validators.required]],
      image: [this.updatedProduct['image'], [Validators.required]],
      description: [this.updatedProduct['description'], [Validators.required]],
      
    });  } else{
      
  this.form = this.fb.group({
    productName: ['', [Validators.required]],
    inStock: ['', [Validators.required]],
    price: ['', [Validators.required]],
    image: ['', [Validators.required]],
    description: ['', [Validators.required]],
    
  });}
}
  add(){
    if(!this.isUpdating){
    this.store.dispatch(addProduct({newProduct:{...this.form.value,
      price: +this.form.value.price,
      inStock: +this.form.value.inStock}}))
       
    } else{
      if (this.updatedProduct){

        this.store.dispatch(updateProduct({prod_id:this.updatedProduct.id,updatedProduct:{
          ...this.form.value,
          price: +this.form.value.price,
          inStock: +this.form.value.inStock,
        }}))
     
      this.updatedProduct=null
      }
    }
    
}

}
