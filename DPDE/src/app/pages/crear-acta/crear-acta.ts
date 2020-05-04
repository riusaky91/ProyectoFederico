import { Component } from '@angular/core';
import { ConferenceData } from '../../providers/conference-data';

@Component({
  selector: 'crear-acta',
  templateUrl: 'crear-acta.html',
  styleUrls: ['./crear-acta.scss'],
})
export class CrearActaPage {
  speakers: any[] = [];

  tipoActa : number;//Variable que toma el tipo de acta seleccionada

  constructor(public confData: ConferenceData) {}

  ionViewDidEnter() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });
  }

  onChangeActas($event){

    if($event.detail.value == 1)
      this.tipoActa = 1;
    if($event.detail.value == 2)
      this.tipoActa = 2;
    if($event.detail.value == 3)
      this.tipoActa = 3;
  }
}
