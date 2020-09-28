import { Component, ViewChild, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, IonList, IonRouterOutlet, LoadingController, ModalController, ToastController, Config } from '@ionic/angular';

import { BuscarActaFiltroPage } from '../buscar-acta-filtro/buscar-acta-filtro';
import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';

/*Importando servicios y entidades para conexion a BD*/

import { CursosService } from '../../servicios/Cursos/Cursos.service';
import { Cursos } from '../../entidades/Cursos/Cursos.model';

import { EstudiantesService } from '../../servicios/Estudiantes/Estudiantes.service';
import { Estudiantes } from '../../entidades/Estudiantes/Estudiantes.model';

import { ActaSeguimientoDisciplinarioService } from '../../servicios/ActaSeguimientoDisciplinario/actaSeguimientoDisciplinario.service';
import { ActaSeguimientoDisciplinario } from '../../entidades/ActaSeguimientoDisciplinario/ActaSeguimientoDisciplinario.model';



@Component({
  selector: 'buscar-acta',
  templateUrl: 'buscar-acta.html',
  styleUrls: ['./buscar-acta.scss'],
})
export class BuscarActaPage implements OnInit {
  // Gets a reference to the list element
  @ViewChild('scheduleList', { static: true }) scheduleList: IonList;
  @ViewChild('actasSeguimientoDisciplinarioList', { static: true }) actasSeguimientoDisciplinarioList: IonList;

  users: any[] = [
    {
      id: 1,
      first: 'Alice',
      last: 'Smith',
    },
    {
      id: 2,
      first: 'Bob',
      last: 'Davis',
    },
    {
      id: 3,
      first: 'Charlie',
      last: 'Rosenburg',
    }
  ];

  compareWithFn = (o1, o2) => {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  };

  compareWith = this.compareWithFn;

  ios: boolean;
  dayIndex = 0;
  queryText = '';
  segment = 'all';
  excludeTracks: any = [];
  shownSessions: any = [];
  groups: any = [];
  confDate: string;
  showSearchbar: boolean;
  
  
  //Variables que toman las Entidades
  estudiantes: Estudiantes[];
  estudiantesPorCurso: Estudiantes[] = [];//variable que toma el filtro estudiantes por curso
  habilitarEstudiates: boolean;//variable que habilita o deshabilitala lista de estudiantes

  cursos: Cursos[];
  
  actasSeguimientoDisciplinario: ActaSeguimientoDisciplinario[];
  actasSeguimientoDisciplinarioPorEstudiante: ActaSeguimientoDisciplinario[] = [];//variable que toma el filtro actas por estudiante
  habilitarActas: boolean;//variable que habilita o deshabilitala lista de actas de Seguimiento



  private b:boolean = false;
  
 

  constructor(
    public alertCtrl: AlertController,
    public confData: ConferenceData,
    public loadingCtrl: LoadingController,
    public modalCtrl: ModalController,
    public router: Router,
    public routerOutlet: IonRouterOutlet,
    public toastCtrl: ToastController,
    public user: UserData,
    public config: Config,
    
    
    
    //Inyeccion servicios de conexion para cada entidad
    private cursosservice: CursosService,
    private estudiantesservice: EstudiantesService,
    private actaSeguimientoDisciplinarioService: ActaSeguimientoDisciplinarioService


  ) {

    

   }

  

  ngOnInit() {

    this.habilitarEstudiates = true;

    this.updateSchedule();

    this.ios = this.config.get('mode') === 'ios';

    //Llamado a cargar las entidades en pagina

    this.readCursos();
    this.readEstudiantes();

    
    
    
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
      this.habilitarActas = true;
    }
  }

  //Metodo que toma el valor del estudiante seleccionado y lista sus actas
  onChangeEstudiantes($event){   
    this.actasSeguimientoDisciplinarioPorEstudiante = [];
    this.actasSeguimientoDisciplinario.forEach(acta => {
      if($event.detail.value == acta.ID_ACTA)
        this.actasSeguimientoDisciplinarioPorEstudiante.push(acta);
      this.habilitarActas = false;                         
    });
    
    if(this.actasSeguimientoDisciplinarioPorEstudiante.length<=0)
      this.habilitarActas = true;

    console.log(this.actasSeguimientoDisciplinarioPorEstudiante);
  }

  

  //CRUD de Entidad -- cursos -- utilizando el servicio 'cursosservice'

  readCursos() {
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

  //CRUD de Entidad -- ActaSeguimientoDisciplinario -- utilizando el servicio 'ActaSeguimientoDisciplinarioService'







  updateSchedule() {
    // Close any open sliding items when the schedule updates
    if (this.scheduleList) {
      this.scheduleList.closeSlidingItems();
    }

    if (this.actasSeguimientoDisciplinarioList) {
      this.actasSeguimientoDisciplinarioList.closeSlidingItems();
    }

    this.confData.getTimeline(this.dayIndex, this.queryText, this.excludeTracks, this.segment).subscribe((data: any) => {
      this.shownSessions = data.shownSessions;
      this.groups = data.groups;
    });
  }

  async presentFilter() {
    const modal = await this.modalCtrl.create({
      component: BuscarActaFiltroPage,
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl,
      componentProps: { excludedTracks: this.excludeTracks }
    });
    await modal.present();

    const { data } = await modal.onWillDismiss();
    if (data) {
      this.excludeTracks = data;
      this.updateSchedule();
    }
  }

  

  async addFavorite(slidingItem: HTMLIonItemSlidingElement, sessionData: any) {
    if (this.user.hasFavorite(sessionData.name)) {
      // Prompt to remove favorite
      this.removeFavorite(slidingItem, sessionData, 'Favorite already added');
    } else {
      // Add as a favorite
      this.user.addFavorite(sessionData.name);

      // Close the open item
      slidingItem.close();

      // Create a toast
      const toast = await this.toastCtrl.create({
        header: `${sessionData.name} was successfully added as a favorite.`,
        duration: 3000,
        buttons: [{
          text: 'Close',
          role: 'cancel'
        }]
      });

      // Present the toast at the bottom of the page
      await toast.present();
    }

  }

  async removeFavorite(slidingItem: HTMLIonItemSlidingElement, sessionData: any, title: string) {
    const alert = await this.alertCtrl.create({
      header: title,
      message: 'Would you like to remove this session from your favorites?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            // they clicked the cancel button, do not remove the session
            // close the sliding item and hide the option buttons
            slidingItem.close();
          }
        },
        {
          text: 'Remove',
          handler: () => {
            // they want to remove this session from their favorites
            this.user.removeFavorite(sessionData.name);
            this.updateSchedule();

            // close the sliding item and hide the option buttons
            slidingItem.close();
          }
        }
      ]
    });
    // now present the alert on top of all other content
    await alert.present();
  }

  async openSocial(network: string, fab: HTMLIonFabElement) {
    const loading = await this.loadingCtrl.create({
      message: `Posting to ${network}`,
      duration: (Math.random() * 1000) + 500
    });
    await loading.present();
    await loading.onWillDismiss();
    fab.close();
  }
}
