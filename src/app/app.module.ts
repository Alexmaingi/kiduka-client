import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminOrdersComponent } from './orders/admin-side/admin-orders/admin-orders.component';
import { IonicModule } from '@ionic/angular';
import { ResertPasswordComponent } from './resert-password/resert-password.component';
import { AdminProductsComponent } from './Home-components/products/admin-side/admin-products/admin-products.component';
import { AddProductComponent } from './Home-components/products/admin-side/add-product/add-product.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent,
    CartComponent,
    SignupComponent,
    ResertPasswordComponent,
    AddProductComponent,
    OrdersComponent,
    HttpClientModule,
    AdminOrdersComponent,
    SigninComponent,
    IonicModule.forRoot(),
    AdminProductsComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
