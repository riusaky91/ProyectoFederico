import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConferenceData } from '../../providers/conference-data';
import { ActionSheetController } from '@ionic/angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

/*Importando servicios y entidades para conexion a BD*/

import { CursosService } from '../../servicios/cursos/cursos.service';
import { Cursos } from '../../entidades/cursos/cursos.model';

import { EstudiantesService } from '../../servicios/estudiantes/estudiantes.service';
import { Estudiantes } from '../../entidades/estudiantes/estudiantes.model';

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
  estudiantesPorCurso: Estudiantes[] = [];//variable que toma el filtro estudiantes por curso
  habilitarEstudiates: boolean;//variable que habilita o deshabilitala lista de estudiantes

  cursos: Cursos[];


  constructor(
    private dataProvider: ConferenceData,
    private route: ActivatedRoute,
    public actionSheetCtrl: ActionSheetController,
    public confData: ConferenceData,
    public inAppBrowser: InAppBrowser,

    //Inyeccion servicios de conexion para cada entidad
    private cursosservice: CursosService,
    private estudiantesservice: EstudiantesService
  ) {



  }

  ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      const speakerId = this.route.snapshot.paramMap.get('actaId');
      
      if (data && data.speakers) {
        for (const speaker of data.speakers) {
          if (speaker && speaker.id === speakerId) {
            this.speaker = speaker;
            break;
          }
        }      
      }
    });
    const acta = this.route.snapshot.paramMap.get('actaId');
    this.tipoActa = parseInt(acta);
    console.log(this.tipoActa);

    this.readCursos();
    this.readEstudiantes();

  }

  openExternalUrl(url: string) {
    this.inAppBrowser.create(
      url,
      '_blank'
    );
  }

  async openSpeakerShare(speaker: any) {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Share ' + speaker.name,
      buttons: [
        {
          text: 'Copy Link',
          handler: () => {
            console.log(
              'Copy link clicked on https://twitter.com/' + speaker.twitter
            );
            if (
              (window as any).cordova &&
              (window as any).cordova.plugins.clipboard
            ) {
              (window as any).cordova.plugins.clipboard.copy(
                'https://twitter.com/' + speaker.twitter
              );
            }
          }
        },
        {
          text: 'Share via ...'
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
  }

  async openContact(speaker: any) {
    const mode = 'ios'; // this.config.get('mode');

    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Contact ' + speaker.name,
      buttons: [
        {
          text: `Email ( ${speaker.email} )`,
          icon: mode !== 'ios' ? 'mail' : null,
          handler: () => {
            window.open('mailto:' + speaker.email);
          }
        },
        {
          text: `Call ( ${speaker.phone} )`,
          icon: mode !== 'ios' ? 'call' : null,
          handler: () => {
            window.open('tel:' + speaker.phone);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await actionSheet.present();
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
  }
}
