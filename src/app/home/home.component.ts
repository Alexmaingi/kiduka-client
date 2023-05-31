import { AuthService } from './../Services/auth.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../Home-components/sidebar/sidebar.component';
import { NavbarComponent } from '../Home-components/navbar/navbar.component';
import { ProductCaroselComponent } from '../Home-components/product-carosel/product-carosel.component';
import { ProductsComponent } from '../Home-components/products/products.component';
import { ProductPageComponent } from '../Home-components/product-page/product-page.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    NavbarComponent,
    ProductCaroselComponent,
    ProductsComponent,
    ProductPageComponent,
    RouterModule,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  authService!: AuthService;
}
