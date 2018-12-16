import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as i from '../../state/app.interfaces';
import { Store, select } from '@ngrx/store';
import { AddToCart, RemoveOneCartItem, RemoveCartItem } from '../../state/app.actions';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cartList$: Observable<IExpectedResult[]>;

  constructor(private store: Store<i.AppState>) { }

  ngOnInit() {
    this.cartList$ = this.store.pipe(
      select(x => {
        const result: IExpectedResult[] = [];

        x.app.cart.forEach(cartItem => {
          const coffee = x.app.coffeeList
            .find(c => c.name === cartItem.name);

          // calculate the total
          const total = coffee.price * cartItem.quantity;

          result.push({
            coffee: coffee,
            total: total,
            quantity: cartItem.quantity
          });
        });

        return result;
      })
    );
  }

  addOneItem(name: string) {
    this.store.dispatch(new AddToCart(name));
  }

  removeOneItem(name: string) {
    this.store.dispatch(new RemoveOneCartItem(name));
  }

  removeItem(name) {
    this.store.dispatch(new RemoveCartItem(name));
  }

}

interface IExpectedResult {
  coffee: i.Coffee;
  quantity: number;
  total: number;
}
