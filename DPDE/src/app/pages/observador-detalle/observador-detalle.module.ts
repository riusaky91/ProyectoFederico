import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ObservadorDetallePageRoutingModule } from './observador-detalle-routing.module';

import { ObservadorDetallePage } from './observador-detalle.page';

import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MatExpansionModule,
    ObservadorDetallePageRoutingModule
  ],
  declarations: [ObservadorDetallePage]
})
export class ObservadorDetallePageModule {}
