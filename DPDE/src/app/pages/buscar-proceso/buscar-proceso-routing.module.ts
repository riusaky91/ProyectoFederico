import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuscarProcesoPage } from './buscar-proceso';

const routes: Routes = [
  {
    path: '',
    component: BuscarProcesoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscarProcesoRoutingModule { }
