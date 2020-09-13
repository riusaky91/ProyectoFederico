import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'crear-acta',
  templateUrl: 'crear-acta.html',
  styleUrls: ['./crear-acta.scss'],
})
export class CrearActaPage{
  
  tipoActa : number = 0;//Variable que toma el tipo de acta seleccionada
  cursos : any[];
  alertCtrl: any;

  constructor(
    public alertController: AlertController,

  ) { 

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
