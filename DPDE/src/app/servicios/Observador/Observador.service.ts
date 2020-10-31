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
    ANUALIDAD:observador.ANUALIDAD,  
    ASIGNATURA_PERIDO_CUARTO: observador.ASIGNATURA_PERIDO_CUARTO,   
    ASIGNATURA_PERIODO_DOS:observador.ASIGNATURA_PERIODO_DOS,
    ASIGNATURA_PERIODO_TRES: observador.ASIGNATURA_PERIODO_TRES,
    ASIGNATURA_PERIODO_UNO: observador.ASIGNATURA_PERIODO_UNO,
    CURSOS_HERMANOS: observador.CURSOS_HERMANOS,
    ESTADO_ESTUDIANTE: observador.ESTADO_ESTUDIANTE,
    HERMANOS: observador.HERMANOS,
    HERMANOS_INSTITUCION: observador.HERMANOS_INSTITUCION,
    ID_ACTA: observador.ID_ACTA,
    ID_ESTUDIANTE: observador.ID_ESTUDIANTE,
    ID_FUNCIONARIO:observador.ID_FUNCIONARIO,
    ID_OBSERVADOR:observador.ID_OBSERVADOR,
    INSTITUCION_ANTERIOR: observador.INSTITUCION_ANTERIOR,
    NOMBRES_APELLIDOS_MADRE: observador.NOMBRES_APELLIDOS_MADRE,
    NOMBRES_APELLIDOS_PADRE: observador.NOMBRES_APELLIDOS_PADRE,
    NOMBRE_ACUDIENTE: observador.NOMBRE_ACUDIENTE,
    OBSERVACIONES_MADRE: observador.OBSERVACIONES_MADRE,
    OBSERVACIONES_PADRE: observador.OBSERVACIONES_PADRE,
    OCUPACION_MADRE: observador.OCUPACION_MADRE,
    OCUPACION_PADRE: observador.OCUPACION_PADRE,
    PERSONAS_VIVE: observador.PERSONAS_VIVE,
    SITUACION_ESTUDIANTE: observador.SITUACION_ESTUDIANTE,
    TELEFONO_ACUDIENTE: observador.TELEFONO_ACUDIENTE,
    TELEFONO_CASA_MADRE: observador.TELEFONO_CASA_MADRE,
    TELEFONO_CASA_PADRE: observador.TELEFONO_CASA_PADRE,
    TELEFONO_TRABAJO_MADRE: observador.TELEFONO_TRABAJO_MADRE,
    TELEFONO_TRABAJO_PADRE: observador.TELEFONO_TRABAJO_PADRE

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
    ANUALIDAD:observador.ANUALIDAD,  
    ASIGNATURA_PERIDO_CUARTO: observador.ASIGNATURA_PERIDO_CUARTO,   
    ASIGNATURA_PERIODO_DOS:observador.ASIGNATURA_PERIODO_DOS,
    ASIGNATURA_PERIODO_TRES: observador.ASIGNATURA_PERIODO_TRES,
    ASIGNATURA_PERIODO_UNO: observador.ASIGNATURA_PERIODO_UNO,
    CURSOS_HERMANOS: observador.CURSOS_HERMANOS,
    ESTADO_ESTUDIANTE: observador.ESTADO_ESTUDIANTE,
    HERMANOS: observador.HERMANOS,
    HERMANOS_INSTITUCION: observador.HERMANOS_INSTITUCION,
    ID_ACTA: observador.ID_ACTA,
    ID_ESTUDIANTE: observador.ID_ESTUDIANTE,
    ID_FUNCIONARIO:observador.ID_FUNCIONARIO,
    ID_OBSERVADOR:observador.ID_OBSERVADOR,
    INSTITUCION_ANTERIOR: observador.INSTITUCION_ANTERIOR,
    NOMBRES_APELLIDOS_MADRE: observador.NOMBRES_APELLIDOS_MADRE,
    NOMBRES_APELLIDOS_PADRE: observador.NOMBRES_APELLIDOS_PADRE,
    NOMBRE_ACUDIENTE: observador.NOMBRE_ACUDIENTE,
    OBSERVACIONES_MADRE: observador.OBSERVACIONES_MADRE,
    OBSERVACIONES_PADRE: observador.OBSERVACIONES_PADRE,
    OCUPACION_MADRE: observador.OCUPACION_MADRE,
    OCUPACION_PADRE: observador.OCUPACION_PADRE,
    PERSONAS_VIVE: observador.PERSONAS_VIVE,
    SITUACION_ESTUDIANTE: observador.SITUACION_ESTUDIANTE,
    TELEFONO_ACUDIENTE: observador.TELEFONO_ACUDIENTE,
    TELEFONO_CASA_MADRE: observador.TELEFONO_CASA_MADRE,
    TELEFONO_CASA_PADRE: observador.TELEFONO_CASA_PADRE,
    TELEFONO_TRABAJO_MADRE: observador.TELEFONO_TRABAJO_MADRE,
    TELEFONO_TRABAJO_PADRE: observador.TELEFONO_TRABAJO_PADRE    
  })
}
  
}
