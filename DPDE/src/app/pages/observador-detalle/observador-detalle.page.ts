import { Component, OnInit } from '@angular/core';

//Importacion para el navigate route

import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

//Importacion de estudiantes Servicio y Modelo

import { EstudiantesService } from '../../servicios/estudiantes/estudiantes.service';
import { Estudiantes } from '../../entidades/estudiantes/estudiantes.model';

@Component({
  selector: 'app-observador-detalle',
  templateUrl: './observador-detalle.page.html',
  styleUrls: ['./observador-detalle.page.scss'],
})
export class ObservadorDetallePage implements OnInit {

  tipoActa: any;//Variable que contiene el tipo de acta seleccionada

  estudiante: Estudiantes[] = null;

  constructor(
    private route: ActivatedRoute,
    private estudiantesservice: EstudiantesService
  ) {
    this.readEstudiante();
   }

  async ngOnInit() {
    
  }
  

  
  ionViewWillEnter() {
    const acta = this.route.snapshot.paramMap.get('envio');
    this.tipoActa = acta;
    console.log(this.tipoActa);
  }

  readEstudiante(){
    this.estudiantesservice.getEstudiante("01").valueChanges().subscribe(estudiante => {
      this.estudiante = estudiante;
      console.log(this.estudiante);
    })   
  }

}
