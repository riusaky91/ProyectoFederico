import { Component, OnInit } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';
import { AlertController } from '@ionic/angular';

import { Cursos } from '../../entidades/cursos/cursos.model';
import { CursosService } from '../../servicios/cursos/cursos.service';


@Component({
  selector: 'crear-acta',
  templateUrl: 'crear-acta.html',
  styleUrls: ['./crear-acta.scss'],
})
export class CrearActaPage implements OnInit {
  

  

  tipoActa : number = 0;//Variable que toma el tipo de acta seleccionada
  cursos : any[];

  constructor(
    public alertController: AlertController,
    private cursosService : CursosService
  ) { 

  }


  async  ngOnInit(){  //es necesaria la palabra reservasa async pcuando se usan promises
    this.traerCursos();
  }


  traerCursos() {
    this.cursosService.getCursosList().valueChanges().subscribe(cursos => {
        this.cursos = cursos
        console.log(this.cursos);
      })
    }
    
  traerCurso(){
    this.cursosService.getCurso("1").valueChanges().subscribe(res => {
      this.cursos = res;
    })
    console.log(this.cursos);
  }

  crearCurso(curso: Cursos){
    this.cursosService.createCurso(curso);
    console.log("Curso Creado");
  }



  ionViewDidEnter() {
    
  }



  onChangeActas($event){

    if($event.detail.value == 1)
      this.tipoActa = 1;
    if($event.detail.value == 2)
      this.tipoActa = 2;
    if($event.detail.value == 3)
      this.tipoActa = 3;
  }

  async ventanaAlerta() {
    const alert = await this.alertController.create({
      cssClass: 'alertaActa',
      header: 'ALERTA',
      message: 'Requieres seleccionar un tipo de acta antes de crearla.',
      buttons: ['ENTENDIDO']
    });

    await alert.present();
  }
}
