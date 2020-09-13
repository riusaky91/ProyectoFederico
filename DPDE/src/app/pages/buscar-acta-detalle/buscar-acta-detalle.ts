import { Component } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';
import { ActivatedRoute } from '@angular/router';
import { UserData } from '../../providers/user-data';

/*Importando servicios y entidades para conexion a BD*/

import { ActaSeguimientoDisciplinarioService } from '../../servicios/ActaSeguimientoDisciplinario/actaSeguimientoDisciplinario.service';
import { ActaSeguimientoDisciplinario } from '../../entidades/ActaSeguimientoDisciplinario/ActaSeguimientoDisciplinario.model';

@Component({
  selector: 'buscar-acta-detalle',
  styleUrls: ['./buscar-acta-detalle.scss'],
  templateUrl: 'buscar-acta-detalle.html'
})
export class BuscarActaDetallePage {
  session: any;
  isFavorite = false;
  defaultHref = '';


  actasSeguimientoDisciplinario: ActaSeguimientoDisciplinario[];
  acta : ActaSeguimientoDisciplinario;

  constructor(
    private dataProvider: ConferenceData,
    private userProvider: UserData,
    private route: ActivatedRoute,
    private actaSeguimientoDisciplinarioService: ActaSeguimientoDisciplinarioService
  ) { }

  ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      if (data && data.schedule && data.schedule[0] && data.schedule[0].groups) {
        const sessionId = this.route.snapshot.paramMap.get('sessionId');
        
        for (const group of data.schedule[0].groups) {
          if (group && group.sessions) {
            for (const session of group.sessions) {
              if (session && session.id === sessionId) {
                this.session = session;

                this.isFavorite = this.userProvider.hasFavorite(
                  this.session.name
                );

                break;
              }
            }
          }
        }
      }
    });

    

    

    
    

  }

  //Metodo a corregir lectura de entidad que busca le numero de acta del router link

  

  ionViewDidEnter() {
    this.defaultHref = `/app/tabs/schedule`;
  }

  sessionClick(item: string) {
    console.log('Clicked', item);
  }

  toggleFavorite() {
    if (this.userProvider.hasFavorite(this.session.name)) {
      this.userProvider.removeFavorite(this.session.name);
      this.isFavorite = false;
    } else {
      this.userProvider.addFavorite(this.session.name);
      this.isFavorite = true;
    }
  }

  shareSession() {
    console.log('Clicked share session');
  }
}
