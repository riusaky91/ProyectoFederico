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
  

  constructor(
      //Inyeccion servicios de conexion para cada entidad
      private cursosservice: CursosService,
      private estudiantesservice: EstudiantesService
    ) {}

  async ngAfterViewInit() {
    this.readCursos();
    this.readEstudiantes();
  }

  //CRUD de Entidad -- cursos -- utilizando el servicio 'cursosservice'

  readCursos(){
    this.cursosservice.getCursos().subscribe(data => {
      this.cursos = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as unknown as Cursos;
      })
    });
  }
  createCurso(cursos: Cursos){
    this.cursosservice.createCursos(cursos);
  }

  updateCurso(cursos: Cursos) {
    this.cursosservice.updateCursos(cursos);
  }

  deleteCurso(id: number) {
    this.cursosservice.deleteCursos(id);
  }

  //CRUD de Entidad -- estudiantes -- utilizando el servicio 'estudiantesservice'

  readEstudiantes(){
    this.estudiantesservice.getEstudiantes().subscribe(data => {
      this.estudiantes = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}         
        } as unknown as Estudiantes;
      })
    });    
  }

  //Metodo que toma el valor del curso seleccionado y lista sus estudiantes
  onChangeCursos($event){   
    this.estudiantesPorCurso = [];
    this.estudiantes.forEach(estudiante => {
      if(estudiante.curso == $event.detail.value)        
        this.estudiantesPorCurso.push(estudiante);
      this.habilitarEstudiates = false;  
    });
    
    if(this.estudiantesPorCurso.length <= 0)
    {
      this.habilitarEstudiates = true;
    }
  }

  onChangeEstudiantes($event){   
    this.estudianteElegido = true;
    this.datosEstudiante = $event.detail.value.split(',');
    console.log(this.datosEstudiante);
  }

  
}





