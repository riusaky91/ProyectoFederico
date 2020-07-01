import { Component, ElementRef, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { Platform } from '@ionic/angular';
import { DOCUMENT} from '@angular/common';

/*Importando servicios y entidades para conexion a BD*/

import { CursosService } from '../../servicios/cursos/cursos.service';
import { Cursos } from '../../entidades/cursos/cursos.model';

import { EstudiantesService } from '../../servicios/estudiantes/estudiantes.service';
import { Estudiantes } from '../../entidades/estudiantes/estudiantes.model';

@Component({
  selector: 'observador-map',
  templateUrl: 'observador.html',
  styleUrls: ['./observador.scss']
})
export class ObservadorPage implements AfterViewInit {
  
  //Variables que toman las Entidades
  estudiantes: Estudiantes[];
  estudiantesPorCurso: Estudiantes[] = [];//variable que toma el filtro estudiantes por curso
  habilitarEstudiates: boolean;//variable que habilita o deshabilitala lista de estudiantes

  datosEstudiante: any [];//arreglo que contiene los datos del estudiante elegido
  estudianteElegido: boolean = false;//si se eligio un estudiante

  cursos: Cursos[];

  lapsos : any = ["Todos","2020","2019","2018","2017","2016","2015"];

  envio: string;
  

  constructor(
      //Inyeccion servicios de conexion para cada entidad
      private cursosservice: CursosService,
      private estudiantesservice: EstudiantesService
    ) { }

  async ngAfterViewInit() {

    this.traerCursos();
    this.readEstudiantes();
  }

  //CRUD de Entidad -- cursos -- utilizando el servicio 'cursosservice'

  traerCursos() {
    this.cursosservice.getCursosList().valueChanges().subscribe(cursos => {
        this.cursos = cursos
        console.log(this.cursos);
      })
    }
    

  //CRUD de Entidad -- estudiantes -- utilizando el servicio 'estudiantesservice'

  readEstudiantes(){
    this.estudiantesservice.getEstudiantesList().valueChanges().subscribe(estudiantes => {
      this.estudiantes =estudiantes;
      console.log(this.estudiantes);
    })   
  }

  //Metodo que toma el valor del curso seleccionado y lista sus estudiantes
  onChangeCursos($event){   
    this.estudiantesPorCurso = [];
    this.estudiantes.forEach(estudiante => {
      if(estudiante.IDCURSO == $event.detail.value)        
        this.estudiantesPorCurso.push(estudiante);
      this.habilitarEstudiates = false;  
    });
    
    if(this.estudiantesPorCurso.length <= 0)
    {
      this.habilitarEstudiates = true;
    }
  }

  //Metodo que toma el valor del estudiante seleccionado y guarda su valor en el arreglo datosEstudiante
  onChangeEstudiantes($event){   
    this.estudianteElegido = true;
    this.datosEstudiante = $event.detail.value.split(',');
    console.log(this.datosEstudiante);
  }

  //Metodo que toma el año seleccionado y el id del estudiante y los envia en un string al observador detalle
  onChangeLapso($event){     

    this.envio = this.datosEstudiante[0] + "-" + $event.detail.value
    console.log(this.envio);
  }
  
}





