import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BuscarProcesoPage } from './buscar-proceso';
import { BuscarProcesoFiltroPage } from '../buscar-proceso-filtro/buscar-proceso-filtro';
import { BuscarProcesoRoutingModule } from './buscar-proceso-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarProcesoRoutingModule
  ],
  declarations: [
    BuscarProcesoPage,
    BuscarProcesoFiltroPage
  ],
  entryComponents: [
    BuscarProcesoFiltroPage
  ]
})
export class BuscarProcesoModule { }
