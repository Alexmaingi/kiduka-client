import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterModule } from '@angular/router';
import { Store} from '@ngrx/store';
import { AppState } from '../Store/app.state';
import { decreaseCount, deleteCartItem, increaseCount, loadCart, makeOrder } from '../Store/Actions/actions';
import { selectCartItems, selectTotalPrice } from '../Store/Selectors/selector';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartComponent implements OnInit {
  totalPrice$!: Observable<number>;
  constructor(
      private store:Store<AppState>
  ) {}
 cart=this.store.select(selectCartItems)

  ngOnInit(): void {
   this.store.dispatch(loadCart())

  this.totalPrice$ = this.store.select(selectTotalPrice);
  }


  addCount(cart_id: string) {
   
    this.store.dispatch(increaseCount({cart_id:cart_id}))
  
  
  }
  minusCount(cart_id: string) {
   this.store.dispatch(decreaseCount({cart_id:cart_id}))
 
  }
  deleteItem(cart_id: string) {
  this.store.dispatch(deleteCartItem({cart_id:cart_id}))
  
  }

  makeOrder() {
    this.store.dispatch(makeOrder())
    
  }
}
