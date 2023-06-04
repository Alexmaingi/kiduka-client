import { Injectable, OnDestroy } from '@angular/core';
import { Product, newProduct, successMessages } from '../Interfaces';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddProductComponent } from '../Home-components/products/admin-side/add-product/add-product.component';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  // token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImQxZmFhZGY3LTAxNWMtNDNkZC05NjM4LTM2NmZiYzIwYjg3YyIsIm5hbWUiOiJ5YWFuaSB0dSIsImVtYWlsIjoiNzY1NDZAZXhhbXBsZS5jb20iLCJwaG9uZU51bWJlciI6NzQ0MzkzNDIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY4NTM2MzUyNCwiZXhwIjoxNjg1NzIzNTI0fQ.aE_E7BEbTnW2xGsVsxpJV99AnHTcNKIH-EHi5vtAkdo'
  updatedProduct!: Product | null;
  token = localStorage.getItem('token') as string;
  constructor(private http: HttpClient) {}

  // all products
  getAllProducts() {
    return this.http.get<Product[]>('http://localhost:4000/products');
  }
  addItemsToCart(prod_id: string): Observable<successMessages> {
    return this.http.post<successMessages>(
      `http://localhost:4000/cart/${prod_id}`,
      '',
      {
        headers: new HttpHeaders().set('token', this.token),
      }
    );
  }
  //products by category
  //one product
  getProduct(prod_id: String): Observable<Product[]> {
    console.log("helllllppppp");
    
    return this.http.get<Product[]>(
      `http://localhost:4000/products/${prod_id}`,
      {
        headers: new HttpHeaders().set('token', this.token),
      }
    );
  }
  //add product
  addProduct(product: newProduct): Observable<successMessages> {
    return this.http.post<successMessages>(
      `http://localhost:4000/products`,
      product,
      {
        headers: new HttpHeaders().set('token', this.token),
      }
    );
  }

  //update product
  updateProduct(
    prod_id: string,
    product: Product
  ): Observable<successMessages> {
    this.updatedProduct = null;
    return this.http.put<successMessages>(
      `http://localhost:4000/products/${prod_id}`,
      product,
      {
        headers: new HttpHeaders().set('token', this.token),
      }
    );
  }
  //delete product
  deleteProduct(prod_id: string): Observable<successMessages> {
    return this.http.delete<successMessages>(
      `http://localhost:4000/products/${prod_id}`,
      {
        headers: new HttpHeaders().set('token', this.token),
      }
    );
  }

  accessAddProduct(product: Product) {
    this.updatedProduct = product;
  }
}
