import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { CrearActaPage } from './crear-acta';
import { CrearActaPageRoutingModule } from './crear-acta-routing.module';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CrearActaPageRoutingModule
  ],
  declarations: [CrearActaPage],
})
export class CrearActaModule {}
