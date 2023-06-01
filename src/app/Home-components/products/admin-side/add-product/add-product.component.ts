import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/Interfaces';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(public productservice:ProductService, private fb:FormBuilder){}
form!:FormGroup
errorMessage!:string
isUpdating=false
updatedProduct = this.productservice.updatedProduct

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
      this.productservice
      .addProduct({
        ...this.form.value,
        price: +this.form.value.price,
        inStock: +this.form.value.inStock
      })
      .subscribe(
        (res) => {
          console.log(res.message);
        },
        (err) => {
          this.errorMessage = err.message;
          console.log(err.message);
          
        }
      );
    console.log(this.form.value);
    } else{
      this.productservice
      .updateProduct(this.updatedProduct.id,{
        ...this.form.value,
        price: +this.form.value.price,
        inStock: +this.form.value.inStock
      })
      .subscribe(
        (res) => {
          console.log(res.message);
        },
        (err) => {
          this.errorMessage = err.message;
          console.log(err.message);
          
        }
      );
    }
    
    }
    
}


