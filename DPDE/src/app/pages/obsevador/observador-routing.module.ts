import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ObservadorPage } from './observador';

const routes: Routes = [
  {
    path: '',
    component: ObservadorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObservadorPageRoutingModule { }
