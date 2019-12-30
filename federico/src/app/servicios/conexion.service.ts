import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Item { name: string; }//item para ser modificado (campo de la BD)


@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private itemsCollection: AngularFirestoreCollection<Item>;//variable que va trear la coleccion de Items de Firestome
  items: Observable<Item[]>;//Item observable

  constructor(
    private afs: AngularFirestore
  ) { 
    this.itemsCollection = afs.collection<Item>('estudiantes');//esta variable va ser igualada a la coleccion llamada items creada en FireStore
    this.items = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;//trayendo la data
        const id = a.payload.doc.id;//trayendo el id
        return { id, ...data };
      }))
    );//guardando los cambios dentro de la coleccion

  }

  listaItem () {//metodo para LEER
    return this.items;
  }

  agregarItem (item:Item) { //metodo para AGREGAR
    this.itemsCollection.add(item);
  }

  cerrar(){
    console.log("hola");
  }
  
}

