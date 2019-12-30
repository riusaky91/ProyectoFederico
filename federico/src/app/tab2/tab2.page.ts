import { Component } from '@angular/core';

//Servicios

import { ConexionService } from '../servicios/conexion.service'

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  estudiantes:any;//variable que contendrá la coleccion estudiantes

  constructor(
    private conexion:ConexionService
  ) 
  {
      this.conexion.listaItem().subscribe(item=>{//llamamos a la conexion e introduccimos en la variable vacia los items de la coleccion
      this.estudiantes = item;
      console.log(this.estudiantes)//prueba de verificacion de la coleccion traida
    });
  }

}
