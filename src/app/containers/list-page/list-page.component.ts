import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {

  isFeatureRemixOn = environment.features.remix;

  coffee = {
    name: 'coffee dummy',
    price: 10.00,
    recipe: [{ name: 'espresso', quantity: 100 }]
  };

  constructor() { }

  ngOnInit() {
  }

  addToCart(name: string) {
  }

  addToCartAndCheckout(name: string) {
  }
}
