import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearActaDetallePageRoutingModule } from './crear-acta-detalle-routing.module';

import { CrearActaDetallePage } from './crear-acta-detalle.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearActaDetallePageRoutingModule
  ],
  declarations: [CrearActaDetallePage]
})
export class CrearActaDetallePageModule {}
