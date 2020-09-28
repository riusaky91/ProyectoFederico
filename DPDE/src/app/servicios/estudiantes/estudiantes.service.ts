import { Injectable } from '@angular/core';

//Importando Conexion a Firebase y Entidad
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Estudiantes } from '../../entidades/Estudiantes/Estudiantes.model';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  estudiantesListRef: AngularFireList<any>;
  estudiantesRef: AngularFireObject<any>;

  constructor(
    private db: AngularFireDatabase//Inyeccion de Dependencia AngularFireDatabase
  ) { }

  //CRUD BASICO COLECCIÓN --estudiantes--

// Create
createEstudiante(estudiantes: Estudiantes) {
  return this.estudiantesListRef.push({
    CODIGO:estudiantes.CODIGO,
    DIRECCION: estudiantes.DIRECCION,
    EDAD: estudiantes.EDAD,
    EMAIL: estudiantes.EMAIL,
    EPS: estudiantes.EPS,
    FOTO:estudiantes.FOTO,
    GRUPO_SANGUINEO:estudiantes.GRUPO_SANGUINEO,
    ID_CURSO:estudiantes.ID_CURSO,
    ID_ESTUDIANTE: estudiantes.ID_ESTUDIANTE,
    ID_OBSERVADOR:estudiantes.ID_OBSERVADOR,
    JORNADA:estudiantes.JORNADA,
    NOMBRE_APELLIDO:estudiantes.NOMBRE_APELLIDO,    
    TELEFONO: estudiantes.TELEFONO,
    TIPO_DOCUMENTO: estudiantes.TIPO_DOCUMENTO
  })
}

// Read Single
getEstudiantes(id: string) {
  this.estudiantesRef = this.db.object('/ESTUDIANTES/' + id);
  return this.estudiantesRef;
}

// Read Collection
getEstudiantesList() {
  this.estudiantesListRef = this.db.list('/ESTUDIANTES');
  return this.estudiantesListRef;
}

// Delete
deleteEstudiante(id: string) {
  this.estudiantesRef = this.db.object('/ESTUDIANTES/' + id);
  this.estudiantesRef.remove();
}
  
// Update
updateEstudiante(id, estudiantes: Estudiantes) {
  return this.estudiantesRef.update({
    CODIGO:estudiantes.CODIGO,
    DIRECCION: estudiantes.DIRECCION,
    EDAD: estudiantes.EDAD,
    EMAIL: estudiantes.EMAIL,
    EPS: estudiantes.EPS,
    FOTO:estudiantes.FOTO,
    GRUPO_SANGUINEO:estudiantes.GRUPO_SANGUINEO,
    ID_CURSO:estudiantes.ID_CURSO,
    ID_ESTUDIANTE: estudiantes.ID_ESTUDIANTE,
    ID_OBSERVADOR:estudiantes.ID_OBSERVADOR,
    JORNADA:estudiantes.JORNADA,
    NOMBRE_APELLIDO:estudiantes.NOMBRE_APELLIDO,    
    TELEFONO: estudiantes.TELEFONO,
    TIPO_DOCUMENTO: estudiantes.TIPO_DOCUMENTO    
  })
}
}
