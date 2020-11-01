import { Component, ElementRef, Inject, ViewChild, AfterViewInit } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { Platform, AlertController } from '@ionic/angular';
import { DOCUMENT} from '@angular/common';

/*Importando servicios y entidades para conexion a BD*/

import { CursosService } from '../../servicios/Cursos/Cursos.service';
import { Cursos } from '../../entidades/Cursos/Cursos.model';

import { EstudiantesService } from '../../servicios/Estudiantes/Estudiantes.service';
import { Estudiantes } from '../../entidades/Estudiantes/Estudiantes.model';

import { FuncionariosService } from '../../servicios/Funcionarios/Funcionarios.service';
import { Funcionarios } from '../../entidades/Funcionarios/Funcionarios.model';

import { ObservadorService}  from '../../servicios/Observador/Observador.service';
import {Observador} from '../../entidades/Observador/Observador.model';

import {ActasService}  from '../../servicios/Actas/Actas.service';
import {Actas} from '../../entidades/Actas/Actas.model';

import { NavigationExtras, Router } from '@angular/router';


 

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

  datosEstudiante: Estudiantes;//arreglo que contiene los datos del estudiante elegido
  estudianteElegido: boolean = false;//si se eligio un estudiante

  cursos: Cursos[];

  lapsos : any = ["Todos","2020","2019","2018","2017","2016","2015"];

  envio: string;

  funcionarios: Funcionarios[];//esta es la entidad

  observador: Observador[];//esta es la entidad 

  actas: Actas[];//esta es la entidad 

  constructor(
      //Inyeccion servicios de conexion para cada entidad
      public alertController: AlertController,
      private cursosservice: CursosService,
      private estudiantesservice: EstudiantesService,
      private funcionariosService: FuncionariosService,
      private observadorService: ObservadorService,   //crear variable 
      private actasService: ActasService,   //crear variable 
      public router:Router
    ) { }

  async ngAfterViewInit() {

    this.getCursosList();
    this.getEstudiantesList();
    this.getFuncionariosList(); //donde se activa metodo creado
    this.getObservadorList();
    this.getActasList();
  }

  //CRUD de Entidad -- cursos -- utilizando el servicio 'cursosservice'

  getCursosList() {
    this.cursosservice.getCursosList().valueChanges().subscribe(cursos => {
        this.cursos = cursos
        console.log("Cursos: ",this.cursos);
      })
    }    

  //CRUD de Entidad -- estudiantes -- utilizando el servicio 'estudiantesservice'

  getEstudiantesList(){
    this.estudiantesservice.getEstudiantesList().valueChanges().subscribe(estudiantes => {
      this.estudiantes =estudiantes;
      console.log("Estudiantes: ",this.estudiantes);      
    })   
  }


//CRUD de Entidad -- Funcionarios -- utilizando el servicio 'FuncionariosService'
getFuncionariosList(){
  this.funcionariosService.getFuncionariosList().valueChanges().subscribe(funcionarios => {
    this.funcionarios =funcionarios;
    console.log("Funcionarios: ",this.funcionarios);
    
  })   
}
//CRUD de Entidad -- Observador -- utilizando el servicio 'ObservadorService'
getObservadorList(){
  this.observadorService.getObservadorList().valueChanges().subscribe(observador => {
    this.observador =observador;
    console.log("Observador: ",this.observador);
    
  })   
}

//CRUD de Entidad -- Actas -- utilizando el servicio 'ActasService'
getActasList(){
  this.actasService.getActasList().valueChanges().subscribe(actas => {
    this.actas =actas;
    console.log("Actas: ",this.actas);
  })   
}

  //Metodo que toma el valor del curso seleccionado y lista sus estudiantes
  onChangeCursos($event){   
    this.estudiantesPorCurso = [];
    this.estudiantes.forEach(estudiante => {
      if(estudiante.ID_CURSO == $event.detail.value)        
        this.estudiantesPorCurso.push(estudiante);
      this.habilitarEstudiates = false;  
    });
    
    if(this.estudiantesPorCurso.length <= 0)
    {
      this.habilitarEstudiates = true;
    }
  }

  //Metodo que toma el id del estudiante seleccionado y guarda su valor en el datosEstudiante
  onChangeEstudiantes($event){   
    this.datosEstudiante  = this.estudiantes.find(x=>x.ID_ESTUDIANTE== $event.detail.value);
    console.log(this.datosEstudiante);
    this.estudianteElegido = true;
  }

  //Metodo que toma el año seleccionado y el id del estudiante y los envia en un string al observador detalle
  onChangeLapso($event){     
    this.envio = this.datosEstudiante.ID_ESTUDIANTE + "-" + $event.detail.value
    console.log(this.envio);
  }
  
  //Ventana de advertencia
  async ventanaAlerta() {
    const alert = await this.alertController.create({
      cssClass: 'alertaActa',
      header: 'ALERTA',
      message: 'Requieres seleccionar un año para ver el detalle.',
      buttons: ['ENTENDIDO']
    });

    await alert.present();
  }

  //Metodo que envia a la sigueinte pagina con el objeto

  generar(){
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.datosEstudiante
      }
    }
    this.router.navigate(['observador-detalle'], navigationExtras)
  }

  
  
}





