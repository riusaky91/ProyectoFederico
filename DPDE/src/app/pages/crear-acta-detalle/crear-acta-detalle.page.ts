import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrearActaRegistroPage } from '../crear-acta-registro/crear-acta-registro';

@Component({
  selector: 'app-crear-acta-detalle',
  templateUrl: './crear-acta-detalle.page.html',
  styleUrls: ['./crear-acta-detalle.page.scss'],
})
export class CrearActaDetallePage {

  acta:any;

  tipoActa: number;//Variable que contiene el tipo de acta seleccionada
  
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { 
      this.route.queryParams.subscribe(params =>{
        if(this.router.getCurrentNavigation().extras.state){
          this.acta = this.router.getCurrentNavigation().extras.state.user;
          console.log(this.acta);
        }
      })
  }


}
