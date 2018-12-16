import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Store, select } from '@ngrx/store';
import { AppState } from '../../state/app.interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartCount$ = this.store.pipe(
    select(x => x.app.cart
      .map(item => item.quantity)
      .reduce((acc, curr) => acc + curr, 0))
  );

  isFeatureRemixOn = environment.features.remix;
  isFeatureBaristaOn = environment.features.barista;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

}
