import { Injectable } from '@angular/core';

//Importando Conexion a Firebase y Entidad
import { AngularFirestore } from '@angular/fire/firestore';
import { Tags } from '../../entidades/Tags/Tags.model';

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(
    private firestore: AngularFirestore//Inyeccion de Dependencias AngularFirestore
  ) { }

  //CRUD BASICO COLECCIÓN --TAGS--

  getTags() {
    return this.firestore.collection('TAGS').snapshotChanges();
  }

  createTags(tags: Tags){
    return this.firestore.collection('TAGS').add(tags);
  }

  updateTags(tags: Tags){
    delete tags.id;
    this.firestore.doc('TAGS/' + tags.id).update(tags);
  }

  deleteTags(tags: number){
    this.firestore.doc('TAGS/' + tags).delete();
  }


  
}
