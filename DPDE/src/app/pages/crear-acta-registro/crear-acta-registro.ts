import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';
import { ActionSheetController, NavController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

/*Importando servicios y entidades para conexion a BD*/

import { CursosService } from '../../servicios/cursos/cursos.service';
import { Cursos } from '../../entidades/cursos/cursos.model';

import { EstudiantesService } from '../../servicios/estudiantes/estudiantes.service';
import { Estudiantes } from '../../entidades/estudiantes/estudiantes.model';
import { NgForm } from '@angular/forms';
import { ActaSeguimientoDisciplinarioService } from '../../servicios/ActaSeguimientoDisciplinario/actaSeguimientoDisciplinario.service';
import { ActaSeguimientoDisciplinario } from '../../entidades/ActaSeguimientoDisciplinario/ActaSeguimientoDisciplinario.model';

@Component({
  selector: 'crear-acta-registro',
  templateUrl: 'crear-acta-registro.html',
  styleUrls: ['./crear-acta-registro.scss'],
})
export class CrearActaRegistroPage {
  speaker: any;

  tipoActa: number;//Variable que contiene el tipo de acta seleccionada

  datosEstudiante: any [];//arreglo que contiene los datos del estudiante elegido
  estudianteElegido: boolean = false;//si se eligio un estudiante

  //Variables que toman las Entidades
  estudiantes: Estudiantes[];
  actaSeguimientoDisciplinario :ActaSeguimientoDisciplinario[];
  actaCreada:ActaSeguimientoDisciplinario = {
    $key:null,
    COMPROMISO: null,
    DESCARGO_ESTUDIANTE:null,
    DESCRIPCION_DE_CONDUCTA: null,
    FECHA_ACTA: null,
    FIRMA_ESTUDIANTE: null,
    FIRMA_DOCENTES: null,
    TIPO: null,
    ID_ACTA : null
  };
  estudiantesPorCurso: Estudiantes[] = [];//variable que toma el filtro estudiantes por curso
  habilitarEstudiates: boolean;//variable que habilita o deshabilitala lista de estudiantes

  cursos: Cursos[];
  
  

  acta:any = {
    hora: '',
    falta: '',
    observacionesDocente: '',
    sancion:'',
    datosEstudiante:'',
    actaCreada: this.actaCreada

  }

  constructor(
    private dataProvider: ConferenceData,
    private route: ActivatedRoute,
    public actionSheetCtrl: ActionSheetController,
    public confData: ConferenceData,
    public inAppBrowser: InAppBrowser,

    //Inyeccion servicios de conexion para cada entidad
    private cursosservice: CursosService,
    private estudiantesservice: EstudiantesService,
    private actaSeguimientoDisciplinarioService: ActaSeguimientoDisciplinarioService,

    public navCtrl: NavController,
    public router:Router,

  ) {  }

  generar(){
    let navigationExtras: NavigationExtras = {
      state: {
        user: this.acta
      }
    }
    this.router.navigate(['crear-acta-detalle'], navigationExtras)
    
    
  }

  limpiar(formularioActa:NgForm){
    formularioActa.reset();
  }

  ionViewWillEnter() {
    const acta = this.route.snapshot.paramMap.get('actaId');
    this.tipoActa = parseInt(acta);
    console.log(this.tipoActa);

    this.getCursosList();
    this.getEstudiantesList();
    this.getActaSeguimientoDisciplinarioList();
    
  }


  //CRUD de Entidad -- cursos -- utilizando el servicio 'cursosservice'

  getCursosList() {
    this.cursosservice.getCursosList().valueChanges().subscribe(cursos => {
        this.cursos = cursos
        console.log(this.cursos);
      })
    }

  //CRUD de Entidad -- estudiantes -- utilizando el servicio 'estudiantesservice'

  
  getEstudiantesList(){
    this.estudiantesservice.getEstudiantesList().valueChanges().subscribe(estudiantes => {
      this.estudiantes =estudiantes;
      console.log(this.estudiantes);
    })   
  }

  //CRUD de Entidad -- ActaSeguimientoDisciplinario -- utilizando el servicio 'ActaSeguimientoDisciplinarioservice'

  
  getActaSeguimientoDisciplinarioList(){
    this.actaSeguimientoDisciplinarioService.getActaSeguimientoDisciplinarioList().valueChanges().subscribe(actaSeguimientoDisciplinario => {
      this.actaSeguimientoDisciplinario =actaSeguimientoDisciplinario;
      console.log(this.actaSeguimientoDisciplinario);
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

  onChangeEstudiantes($event){   
    this.estudianteElegido = true;
    this.acta.datosEstudiante  = this.estudiantesPorCurso.find(x=>x.IDESTUDIANTE== $event.detail.value);
    console.log(this.acta);
    
  }



}
