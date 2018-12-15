import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Coffee, AppState } from '../../state/app.interfaces';
import { Store, select } from '@ngrx/store';
import { GetCoffeeListSuccess } from '../../state/app.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  isFeatureRemixOn = environment.features.remix;

  coffeeList$: Observable<Coffee[]>;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    // select coffee list from database
    // then display in ui
    this.coffeeList$ = this.store.pipe(
      select(state => state.app.coffeeList)
    );

    // call api, get list of coffee from api
    // temporarily we create a dummy list
    // trigger store action GET_COFFEE_LIST_SUCCESS
    // to update the store (aka "database")
    const dummyList = [
      {
        name: 'coffee dummy 1',
        price: 10.00,
        recipe: [{ name: 'espresso', quantity: 100 }]
      },
      {
        name: 'coffee dummy 2',
        price: 20.00,
        recipe: [{ name: 'espresso', quantity: 200 }]
      },
    ];

    // action
    this.store.dispatch(new GetCoffeeListSuccess(dummyList));
  }

  addToCart(name: string) {
  }

  addToCartAndCheckout(name: string) {
  }
}
