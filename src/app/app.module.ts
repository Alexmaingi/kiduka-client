import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';
import {HttpClientModule} from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { AdminOrdersComponent } from './orders/admin-side/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './Home-components/products/admin-side/admin-products/admin-products.component'
import { AddProductComponent } from './Home-components/products/admin-side/add-product/add-product.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productReducers} from './Store/Reducers/reducer';
import { ProductsEffects } from './Store/Effects/productsEffects';



@NgModule({
  declarations: [AppComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent,
    CartComponent,
    SignupComponent,
    AddProductComponent,
    OrdersComponent,
    HttpClientModule,
    IonicModule.forRoot(),
    AdminOrdersComponent,
    SigninComponent,
    AdminProductsComponent,
  
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  
    StoreModule.forRoot({products:productReducers}, {}),
  
    EffectsModule.forRoot([ProductsEffects])

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
