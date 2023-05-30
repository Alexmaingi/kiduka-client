import { NgModule } from '@angular/core';
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
import { AdminOrdersComponent } from './orders/admin-side/admin-orders/admin-orders.component'

@NgModule({
  declarations: [AppComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent,
    CartComponent,
    SignupComponent,
    OrdersComponent,
    HttpClientModule,
    IonicModule.forRoot(),
    AdminOrdersComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
