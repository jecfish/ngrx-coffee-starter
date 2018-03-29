import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-customize-page',
  templateUrl: './customize-page.component.html',
  styleUrls: ['./customize-page.component.css']
})
export class CustomizePageComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();

  ingredients = [
    'espresso',
    'chocolate syrup',
    'steamed milk',
    'milk foam',
    'whipped cream',
    'water'
  ];

  private defaultCoffee = {
    name: '',
    price: 0,
    recipe: this.ingredients.map(x => ({ name: x, quantity: 0 }))
  };

  coffee = { ...this.defaultCoffee };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const { template = '' } = this.route.snapshot.queryParams;
  }

  addToCart(coffee: any) {
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
