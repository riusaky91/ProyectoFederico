import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { ObservadorPage } from './observador';
import { ObservadorPageRoutingModule } from './observador-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ObservadorPageRoutingModule
  ],
  declarations: [
    ObservadorPage,
  ]
})
export class ObservadorModule { }
