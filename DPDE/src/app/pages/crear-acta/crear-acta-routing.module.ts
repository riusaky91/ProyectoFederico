import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrearActaPage } from './crear-acta';
const routes: Routes = [
  {
    path: '',
    component: CrearActaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearActaPageRoutingModule {}
