import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-customize-page',
  templateUrl: `./customize-page.component.html`,
  styleUrls: ['./customize-page.component.css']
})
export class CustomizePageComponent implements OnInit, OnDestroy {
  destroy$ = new Subject();

  ingredients = [
    'chocolate syrup',
    'espresso',
    'milk foam',
    'steamed milk',
    'whipped cream',
    'water'
  ];

  coffee;

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
