import { Injectable } from '@angular/core';

//Importando Conexion a Firebase y Entidad
import { AngularFirestore } from '@angular/fire/firestore';
import { ActaSeguimientoDisciplinario } from '../../entidades/ActaSeguimientoDisciplinario/ActaSeguimientoDisciplinario.model';

@Injectable({
  providedIn: 'root'
})
export class ActaSeguimientoDisciplinarioService {

  constructor(
    private firestore: AngularFirestore//Inyeccion de Dependencias AngularFirestore
  ) { }

  //CRUD BASICO COLECCIÓN --ACTA_SEGUIMIENTO_DISCIPLINARIO--

  getActaSeguimientoDisciplinario() {
    return this.firestore.collection('ACTA_SEGUIMIENTO_DISCIPLINARIO').snapshotChanges();
  }

  createActaSeguimientoDisciplinario(actaSeguimientoDisciplinario: ActaSeguimientoDisciplinario){
    return this.firestore.collection('ACTA_SEGUIMIENTO_DISCIPLINARIO').add(actaSeguimientoDisciplinario);
  }

  updateActaSeguimientoDisciplinario(actaSeguimientoDisciplinario: ActaSeguimientoDisciplinario){
    delete actaSeguimientoDisciplinario.id;
    this.firestore.doc('ACTA_SEGUIMIENTO_DISCIPLINARIO/' + actaSeguimientoDisciplinario.id).update(actaSeguimientoDisciplinario);
  }

  deleteActaSeguimientoDisciplinario(estudiantesId: number){
    this.firestore.doc('ACTA_SEGUIMIENTO_DISCIPLINARIO/' + estudiantesId).delete();
  }
}
