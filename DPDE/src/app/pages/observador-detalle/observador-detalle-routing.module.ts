import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObservadorDetallePage } from './observador-detalle.page';

const routes: Routes = [
  {
    path: '',
    component: ObservadorDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ObservadorDetallePageRoutingModule {}
