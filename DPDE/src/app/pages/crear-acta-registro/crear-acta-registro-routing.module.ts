import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrearActaRegistroPage } from './crear-acta-registro';

const routes: Routes = [
  {
    path: '',
    component: CrearActaRegistroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrearActaRegistroPageRoutingModule { }
