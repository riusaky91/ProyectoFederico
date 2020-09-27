import { Injectable } from '@angular/core';

//Importando Conexion a Firebase y Entidad
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import {Funcionarios } from '../../entidades/Funcionarios/Funcionarios.model';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  funcionariosListRef: AngularFireList<any>;
  funcionariosRef: AngularFireObject<any>;

  constructor(
    private db: AngularFireDatabase //sirve para referenciar la conexion firebase y angular 
  ) { }

  // Create
  //metodo=creaobservador(ParametrodeEntrada=observador:Tipoparametro=observador)
createFuncionarios(funcionarios: Funcionarios) {
  return this.funcionariosListRef.push({    
    CARGO:funcionarios.CARGO,
    DIRECTOR_CURSO:funcionarios.DIRECTOR_CURSO,    
    ID_FUNCIONARIO:funcionarios.ID_FUNCIONARIO,
    NOMBRE_APELLIDO:funcionarios.NOMBRE_APELLIDO,
    TIPO_DOCUMENTO:funcionarios.TIPO_DOCUMENTO
  })
}

// Read Single
//Buscar un registro por id
getFuncionarios(id: string) {  //cambiar nombre metodo
  this.funcionariosRef = this.db.object('/FUNCIONARIOS/' + id);//que tenga mismo nombre de la conleccion en firebase
  return this.funcionariosRef;
}

// Read Collection
//Buscar todos los registros de la coleccion
getFuncionariosList() { //cambiar nombre metodo
  this.funcionariosListRef = this.db.list('/FUNCIONARIOS'); 
  return this.funcionariosListRef;
}

// Delete
deleteObservador(id: string) {
  this.funcionariosRef = this.db.object('/FUNCIONARIOS/' + id);
  this.funcionariosRef.remove();
}
  
// Update
updateFuncionarios(id, funcionarios: Funcionarios) {
  return this.funcionariosRef.update({
    CARGO:funcionarios.CARGO,
    DIRECTOR_CURSO:funcionarios.DIRECTOR_CURSO,    
    ID_FUNCIONARIO:funcionarios.ID_FUNCIONARIO,
    NOMBRE_APELLIDO:funcionarios.NOMBRE_APELLIDO,
    TIPO_DOCUMENTO:funcionarios.TIPO_DOCUMENTO    
  })
}
  
}
