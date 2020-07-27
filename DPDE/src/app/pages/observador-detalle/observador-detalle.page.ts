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

  estudiante: Estudiantes;//Pendiente crear arreglo de objetos con las diferentes interfaces generadas en la pagina anterior

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.estudiante = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.estudiante);
      }
    })
    
   }

  async ngOnInit() {
    console.log(this.estudiante);
  }
  

  
  

  

}
