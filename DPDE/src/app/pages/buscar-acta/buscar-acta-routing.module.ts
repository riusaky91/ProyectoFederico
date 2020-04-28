import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BuscarActaPage } from './buscar-acta';

const routes: Routes = [
  {
    path: '',
    component: BuscarActaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscarActaRoutingModule { }
