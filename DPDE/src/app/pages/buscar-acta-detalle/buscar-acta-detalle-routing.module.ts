import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuscarActaDetallePage } from './buscar-acta-detalle';

const routes: Routes = [
  {
    path: '',
    component: BuscarActaDetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscarActaDetalleRoutingModule { }
