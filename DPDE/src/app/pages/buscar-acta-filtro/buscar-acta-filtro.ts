import { Component } from '@angular/core';
import { Config, ModalController, NavParams } from '@ionic/angular';

import { ConferenceData } from '../../providers/conference-data';

/*Importando servicios y entidades para conexion a BD*/

import { TagsService } from '../../servicios/Tags/Tags.service';
import { Tags } from '../../entidades/Tags/Tags.model';


@Component({
  selector: 'buscar-acta-filtro',
  templateUrl: 'buscar-acta-filtro.html',
  styleUrls: ['./buscar-acta-filtro.scss'],
})
export class BuscarActaFiltroPage {
  ios: boolean;

  tracks: {name: string, icon: string, isChecked: boolean}[] = [];
  tagsActas: {nombre: string, icono: string, estaSeleccionada: boolean}[] = [];

  tags : Tags[];

  constructor(
    public confData: ConferenceData,
    private config: Config,
    public modalCtrl: ModalController,
    public navParams: NavParams,
    private tagsService : TagsService
  ) { }

  ionViewWillEnter() {
    this.ios = this.config.get('mode') === `ios`;

    // passed in array of track names that should be excluded (unchecked)
    const excludedTrackNames = this.navParams.get('excludedTracks');

    this.confData.getTracks().subscribe((tracks: any[]) => {
      tracks.forEach(track => {
        this.tracks.push({
          name: track.name,
          icon: track.icon,
          isChecked: (excludedTrackNames.indexOf(track.name) === -1)
        });
      });
    });

    this.readTags();
  }

  //Metodo que lee las entidades de TAGS y las agrega al arreglo 

  readTags(){
    this.tagsService.getTags().subscribe(data => {
      this.tags = data.map(e => {
        return {
          id: e.payload.doc.id,
          ...e.payload.doc.data() as {}
        } as unknown as Tags;
      })
      const excludedTrackNames = this.navParams.get('excludedTracks');
      this.tags.forEach(tag => {
        this.tagsActas.push({
          nombre: tag.NOMBRE,
          icono: tag.ICONO,
          estaSeleccionada: (excludedTrackNames.indexOf(tag.NOMBRE) === -1)
        });
      });
    
    });
  }

  selectAll(check: boolean) {
    // set all to checked or unchecked
    this.tagsActas.forEach(tag => {
      tag.estaSeleccionada = check;
    });
  }

  applyFilters() {
    // Pass back a new array of track names to exclude
    const excludedTrackNames = this.tagsActas.filter(c => !c.estaSeleccionada).map(c => c.nombre);
    this.dismiss(excludedTrackNames);
  }

  dismiss(data?: any) {
    // using the injected ModalController this page
    // can "dismiss" itself and pass back data
    this.modalCtrl.dismiss(data);
  }
}
