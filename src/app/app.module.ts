import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [AppComponent,  SigninComponent],
  imports: [BrowserModule, AppRoutingModule, HomeComponent, CartComponent,SignupComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
