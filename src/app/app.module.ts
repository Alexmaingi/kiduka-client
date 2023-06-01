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

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeComponent,
    CartComponent,
    SignupComponent,
    ResertPasswordComponent,
    OrdersComponent,
    HttpClientModule,
    AdminOrdersComponent,
    SigninComponent,
    IonicModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
