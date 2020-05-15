import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs-page';
import { BuscarActaPage } from '../buscar-acta/buscar-acta';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'buscar-acta',
        children: [
          {
            path: '',
            component: BuscarActaPage,
          },
          {
            path: 'acta/:actaId',
            loadChildren: () => import('../buscar-acta-detalle/buscar-acta-detalle.module').then(m => m.BuscarActaDetalleModule)
          }
        ]
      },
      {
        path: 'crear-acta',
        children: [
          {
            path: 'crear/:crearId',
            loadChildren: () => import('../crear-acta/crear-acta.module').then(m => m.CrearActaModule)
          },
          {
            path: 'session/:sessionId',
            loadChildren: () => import('../buscar-acta-detalle/buscar-acta-detalle.module').then(m => m.BuscarActaDetalleModule)
          },
          {
            path: 'crear-acta-detalle/:actaId',
            loadChildren: () => import('../crear-acta-detalle/crear-acta-detalle.module').then(m => m.CrearActaDetalleModule)
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
        redirectTo: '/app/tabs/buscar-acta',
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

