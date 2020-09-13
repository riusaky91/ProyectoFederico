import { Injectable } from '@angular/core';

//Importando Conexion a Firebase y Entidad
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import {Observador } from '../../entidades/Observador/Observador.model';

@Injectable({
  providedIn: 'root'
})
export class ObservadorService {

  observadorListRef: AngularFireList<any>;
  observadorRef: AngularFireObject<any>;

  constructor(
    private db: AngularFireDatabase //sirve para referenciar la conexion firebase y angular 
  ) { }

  // Create
  //metodo=creaobservador(ParametrodeEntrada=observador:Tipoparametro=observador)
createObservador(observador: Observador) {
  return this.observadorListRef.push({
    IDESTUDIANTE: observador.IDESTUDIANTE,
    NOMBREMADRE:observador.NOMBREMADRE,
    NOMBREPADRE:observador.NOMBREPADRE
  })
}

// Read Single
//Buscar un registro por id
getObservador(id: string) {  //cambiar nombre metodo
  this.observadorRef = this.db.object('/OBSERVADOR/' + id);//que tenga mismo nombre de la conleccion en firebase
  return this.observadorRef;
}

// Read Collection
//Buscar todos los registros de la coleccion
getObservadorList() { //cambiar nombre metodo
  this.observadorListRef = this.db.list('/OBSERVADOR'); 
  return this.observadorListRef;
}

// Delete
deleteObservador(id: string) {
  this.observadorRef = this.db.object('/OBSERVADOR/' + id);
  this.observadorRef.remove();
}
  
// Update
updateObservador(id, observador: Observador) {
  return this.observadorRef.update({
    IDESTUDIANTE: observador.IDESTUDIANTE,
    NOMBREMADRE:observador.NOMBREMADRE,
    NOMBREPADRE:observador.NOMBREPADRE
  })
}
  
}
