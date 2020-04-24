import { Injectable } from '@angular/core';

//Importando Conexion a Firebase y Entidad
import { AngularFirestore } from '@angular/fire/firestore';
import { Cursos } from '../../entidades/cursos/cursos.model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor(
    private firestore: AngularFirestore//Inyeccion de Dependencias AngularFirestore
  ) { }

  //CRUD BASICO COLECCIÓN --cursos--

  getCursos() {
    return this.firestore.collection('cursos').snapshotChanges();
  }

  createCursos(cursos: Cursos){
    return this.firestore.collection('cursos').add(cursos);
  }

  updateCursos(cursos: Cursos){
    delete cursos.id;
    this.firestore.doc('cursos/' + cursos.id).update(cursos);
  }

  deleteCursos(cursosId: number){
    this.firestore.doc('cursos/' + cursosId).delete();
  }

}
