import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarActaDetallePage } from './buscar-acta-detalle';
import { BuscarActaDetalleRoutingModule } from './buscar-acta-detalle-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    BuscarActaDetalleRoutingModule
  ],
  declarations: [
    BuscarActaDetallePage,
  ]
})
export class BuscarActaDetalleModule { }
