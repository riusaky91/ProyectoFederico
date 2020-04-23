import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscarProcesoDetallePage } from './buscar-proceso-detalle';
import { BuscarProcesoDetalleRoutingModule } from './buscar-proceso-detalle-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    BuscarProcesoDetalleRoutingModule
  ],
  declarations: [
    BuscarProcesoDetallePage,
  ]
})
export class BuscarProcesoDetalleModule { }
