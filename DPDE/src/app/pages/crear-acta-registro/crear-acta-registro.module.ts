import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrearActaRegistroPage } from './crear-acta-registro';
import { CrearActaRegistroPageRoutingModule } from './crear-acta-registro-routing.module';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';


//Crear Firma 
import { SignaturePadModule } from 'angular2-signaturepad';


@NgModule({
  imports: [
    SignaturePadModule,
    CommonModule,
    IonicModule,
    FormsModule,
    CrearActaRegistroPageRoutingModule
  ],
  declarations: [
    CrearActaRegistroPage,
  ]
})
export class CrearActaRegistroModule { }
