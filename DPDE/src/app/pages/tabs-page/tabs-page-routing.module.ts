import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { BuscarProcesoPage } from '../buscar-proceso/buscar-proceso';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'buscar-proceso',
        children: [
          {
            path: '',
            component: BuscarProcesoPage,
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../buscar-proceso-detalle/buscar-proceso-detalle.module').then(m => m.BuscarProcesoDetalleModule)
          }
        ]
      },
      {
        path: 'speakers',
        children: [
          {
            path: '',
            loadChildren: () => import('../speaker-list/speaker-list.module').then(m => m.SpeakerListModule)
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../buscar-proceso-detalle/buscar-proceso-detalle.module').then(m => m.BuscarProcesoDetalleModule)
          },
          {
            path: 'speaker-details/:speakerId',
            loadChildren: () => import('../speaker-detail/speaker-detail.module').then(m => m.SpeakerDetailModule)
          }
        ]
      },
      {
        path: 'map',
        children: [
          {
            path: '',
            loadChildren: () => import('../map/map.module').then(m => m.MapModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('../about/about.module').then(m => m.AboutModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/app/tabs/buscar-proceso',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

