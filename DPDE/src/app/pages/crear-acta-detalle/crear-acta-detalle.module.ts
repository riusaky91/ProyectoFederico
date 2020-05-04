import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearActaDetallePage } from './crear-acta-detalle';
import { CrearActaDetallePageRoutingModule } from './crear-acta-detalle-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    CrearActaDetallePageRoutingModule
  ],
  declarations: [
    CrearActaDetallePage,
  ]
})
export class CrearActaDetalleModule { }
