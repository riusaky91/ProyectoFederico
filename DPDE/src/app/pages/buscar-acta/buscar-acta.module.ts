import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BuscarActaPage } from './buscar-acta';
import { BuscarActaFiltroPage } from '../buscar-acta-filtro/buscar-acta-filtro';
import { BuscarActaRoutingModule } from './buscar-acta-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarActaRoutingModule
  ],
  declarations: [
    BuscarActaPage,
    BuscarActaFiltroPage
  ],
  entryComponents: [
    BuscarActaFiltroPage
  ]
})
export class BuscarActaModule { }
