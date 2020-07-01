import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { AboutModule } from '../about/about.module';
import { ObservadorModule } from '../obsevador/observador.module';
import { BuscarActaModule } from '../buscar-acta/buscar-acta.module';
import { BuscarActaDetalleModule } from '../buscar-acta-detalle/buscar-acta-detalle.module';
import { CrearActaRegistroModule } from '../crear-acta-registro/crear-acta-registro.module';
import { CrearActaModule } from '../crear-acta/crear-acta.module';

@NgModule({
  imports: [
    AboutModule,
    CommonModule,
    IonicModule,
    ObservadorModule,
    BuscarActaModule,
    BuscarActaDetalleModule,
    CrearActaRegistroModule,
    CrearActaModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
