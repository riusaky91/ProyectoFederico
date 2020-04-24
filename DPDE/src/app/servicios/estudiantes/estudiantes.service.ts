import { Injectable } from '@angular/core';

//Importando Conexion a Firebase y Entidad
import { AngularFirestore } from '@angular/fire/firestore';
import { Estudiantes } from '../../entidades/estudiantes/estudiantes.model';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  constructor(
    private firestore: AngularFirestore//Inyeccion de Dependencias AngularFirestore
  ) { }

  //CRUD BASICO COLECCIÓN --estudiantes--

  getEstudiantes() {
    return this.firestore.collection('estudiantes').snapshotChanges();
  }

  createEstudiantes(estudiantes: Estudiantes){
    return this.firestore.collection('estudiantes').add(estudiantes);
  }

  updateEstudiantes(estudiantes: Estudiantes){
    delete estudiantes.id;
    this.firestore.doc('estudiantes/' + estudiantes.id).update(estudiantes);
  }

  deleteEstudiantes(estudiantesId: number){
    this.firestore.doc('estudiantes/' + estudiantesId).delete();
  }
}
