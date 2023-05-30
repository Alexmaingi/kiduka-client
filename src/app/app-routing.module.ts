import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent } from './home/home.component';
import {AdminOrdersComponent}  from './orders/admin-side/admin-orders/admin-orders.component';
import { CartComponent } from './cart/cart.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'sigin', component: SigninComponent },
  {path:'home',component: HomeComponent},
  {path:'',component:CartComponent},
  {path:'order',component:OrdersComponent},
  {path:'adminOrder',component:AdminOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
