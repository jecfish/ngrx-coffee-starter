import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { BaristaRoutingModule } from './barista-routing.module';
import { EmployeeListPageComponent } from './containers';

const CONTAINERS = [EmployeeListPageComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BaristaRoutingModule
  ],
  declarations: [
    ...CONTAINERS
  ]
})
export class BaristaModule { }
