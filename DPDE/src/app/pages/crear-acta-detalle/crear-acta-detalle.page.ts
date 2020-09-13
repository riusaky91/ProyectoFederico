import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//PDF
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-crear-acta-detalle',
  templateUrl: './crear-acta-detalle.page.html',
  styleUrls: ['./crear-acta-detalle.page.scss'],
})
export class CrearActaDetallePage {

  acta:any;

  tipoActa: number;//Variable que contiene el tipo de acta seleccionada
  
  pdfObject : any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { 
      this.route.queryParams.subscribe(params =>{
        if(this.router.getCurrentNavigation().extras.state){
          this.acta = this.router.getCurrentNavigation().extras.state.user;
          console.log(this.acta);
        }
      })

  }
  
  //Metodo que genera un PDF
generarPDF(){

  let actaSeguimiento={
    content: [
      {
        text:'Informacion personal del Estudiante. \n\n',
        style: 'Cabecera'
      },
      
      'Nombre del Estudiante: '+this.acta.datosEstudiante.NOMBRE,
      'Documento: '+this.acta.datosEstudiante.IDESTUDIANTE,
      'Jornada:'+ this.acta.datosEstudiante.JORNADA,
      'Curso:'+this.acta.datosEstudiante.IDCURSO,
      'Dirección/Barrio: ',

      'Teléfonos: '+this.acta.datosEstudiante.TELEFONO,
      
      'EPS: '+this.acta.datosEstudiante.EPS,
      'Grupo Sanguineo y RH: ',      
      'Correo Electronico: '+this.acta.datosEstudiante.EMAIL+'\n\n',
      {
        text:'Informacion Acta. \n\n',
        style: 'Cabecera'
      },
      
      'Descripción de la Conducta: ',
      'Descargos Estudiante: '+this.acta.actaCreada.DESCARGO_ESTUDIANTE,
      'Compromiso Estudiante:'+ this.acta.actaCreada.COMPROMISO,
      'Fecha Acta:'+this.acta.actaCreada.FECHA_ACTA,
      'Firma Estudiante: ',
      'Firma Docente: \n\n',
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

  this.pdfObject = pdfMake.createPdf(actaSeguimiento).download("Acta de Seguimiento Disciplinario");

}

}
