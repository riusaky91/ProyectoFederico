import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs-page';
import { TabsPageRoutingModule } from './tabs-page-routing.module';

import { AboutModule } from '../about/about.module';
import { MapModule } from '../map/map.module';
import { BuscarProcesoModule } from '../buscar-proceso/buscar-proceso.module';
import { BuscarProcesoDetalleModule } from '../buscar-proceso-detalle/buscar-proceso-detalle.module';
import { SpeakerDetailModule } from '../speaker-detail/speaker-detail.module';
import { SpeakerListModule } from '../speaker-list/speaker-list.module';

@NgModule({
  imports: [
    AboutModule,
    CommonModule,
    IonicModule,
    MapModule,
    BuscarProcesoModule,
    BuscarProcesoDetalleModule,
    SpeakerDetailModule,
    SpeakerListModule,
    TabsPageRoutingModule
  ],
  declarations: [
    TabsPage,
  ]
})
export class TabsModule { }
