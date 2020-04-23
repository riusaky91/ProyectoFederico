import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuscarProcesoDetallePage } from './buscar-proceso-detalle';

const routes: Routes = [
  {
    path: '',
    component: BuscarProcesoDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscarProcesoDetalleRoutingModule { }
