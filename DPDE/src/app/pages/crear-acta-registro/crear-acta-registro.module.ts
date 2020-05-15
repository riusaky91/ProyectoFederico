import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearActaRegistroPage } from './crear-acta-registro';
import { CrearActaRegistroPageRoutingModule } from './crear-acta-registro-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CrearActaRegistroPageRoutingModule
  ],
  declarations: [
    CrearActaRegistroPage,
  ]
})
export class CrearActaRegistroModule { }
