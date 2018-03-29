import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemixRoutingModule } from './remix-routing.module';

import { CustomizePageComponent } from './containers';
import { SharedModule } from '../shared';

const CONTAINERS = [CustomizePageComponent];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RemixRoutingModule
  ],
  declarations: [
    ...CONTAINERS
  ]
})
export class RemixModule { }
