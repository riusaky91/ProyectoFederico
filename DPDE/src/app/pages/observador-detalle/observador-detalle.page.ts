import { Component, OnInit } from '@angular/core';

//Importacion para el navigate route

import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

//Importacion de estudiantes Servicio y Modelo

import { EstudiantesService } from '../../servicios/Estudiantes/Estudiantes.service';
import { Estudiantes } from '../../entidades/Estudiantes/Estudiantes.model';


//PDF
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-observador-detalle',
  templateUrl: './observador-detalle.page.html',
  styleUrls: ['./observador-detalle.page.scss'],
})
export class ObservadorDetallePage implements OnInit {

  tipoActa: any;//Variable que contiene el tipo de acta seleccionada

  estudiante: Estudiantes;//Pendiente crear arreglo de objetos con las diferentes interfaces generadas en la pagina anterior

  pdfObject : any;

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
  


//Metodo que genera un PDF
generarPDF(){
  console.log("Holita");

  let docDefinition={
    content: [
      {
        text:'Informacion personal del Estudiante. \n\n',
        style: 'Cabecera'
      },
      
      'Nombre del Estudiante: '+this.estudiante.NOMBRE_APELLIDO,
      'Documento: '+this.estudiante.ID_ESTUDIANTE,
      'Jornada: '+ this.estudiante.JORNADA,
      'Curso: '+this.estudiante.ID_CURSO,
      'Dirección/Barrio: '+this.estudiante.DIRECCION,

      'Teléfonos: '+this.estudiante.TELEFONO,
      
      'EPS: '+this.estudiante.EPS,
      'Grupo Sanguineo y RH: '+this.estudiante.GRUPO_SANGUINEO,
      'Correo Electronico: '+this.estudiante.EMAIL+'\n\n',
      {
        style: 'tabla',
        table: {
          body: [
            ['Columna 1', 'Columna 2', 'Columna 3'],
            ['valor', 'un estudiante', 'flipendo']
          ]
        }
      },
    ],
    styles: {
      Cabecera: {
        fontSize: 18,
        bold: true
      },
      tabla: {
        margin: [0, 5, 0, 15]
      },
    }

  }

  this.pdfObject = pdfMake.createPdf(docDefinition).download();

}
  
  

  

}
