import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import * as i from '../../state/app.interfaces';
import { EmptyCart } from '../../state/app.actions';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit {

  private coffeeList$ = this.store
    .pipe(select(x => x.app.coffeeList));

  private cart$ = this.store
    .pipe(select(x => x.app.cart));

  // example
  // cart: [{itemA 2}, {item B 4, itemC 6}]
  // coffeeList: [itemA $10, itemB $20, itemC $100]

  // end result total: $20 + $80 + $600 = $700

  // map(([list, cart])
  // [
  //  list：[itemA $10, itemB $20, itemC $100],
  //  cart: [{itemA 2}, {item B 4, itemC 6}]
  // ]

  // cart.map
  // [ $20, $80, $600 ]

  // x.reduce
  // loop1: 0 + $20 = $20
  // loop2: $20 + $80 = $100
  // loop3: $100 + $600 = $700

  total$ = combineLatest(this.coffeeList$, this.cart$).pipe(
    map(([list, cart]) => cart.map(c => list.find(x => x.name === c.name).price * c.quantity)),
    map(x => x.reduce((acc, curr) => acc + curr, 0))
  );

  constructor(private store: Store<i.AppState>, private router: Router) { }

  ngOnInit() {
  }

  pay() {
    alert('Yay, order placed. Start a new order!');
    this.store.dispatch(new EmptyCart());
    this.router.navigateByUrl('/menu');
  }

}
