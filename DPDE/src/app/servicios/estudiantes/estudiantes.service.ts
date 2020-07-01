import { Injectable } from '@angular/core';

//Importando Conexion a Firebase y Entidad
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Estudiantes } from '../../entidades/estudiantes/estudiantes.model';

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
createEstudiante(estudiante: Estudiantes) {
  return this.estudiantesListRef.push({
    IDESTUDIANTE: estudiante.IDESTUDIANTE,
    IDCURSO: estudiante.IDCURSO,
    DIRECCION: estudiante.DIRECCION,
    EDAD: estudiante.EDAD,
    EMAIL: estudiante.EMAIL,
    EPS: estudiante.EPS,
    GRUPO_SANGUINEO:estudiante.GRUPO_SANGUINEO,
    JORNADA:estudiante.JORNADA,
    NOMBRE:estudiante.NOMBRE,
    TELEFONO: estudiante.TELEFONO,
    TIPO_DOCUMENTO: estudiante.TIPO_DOCUMENTO
  })
}

// Read Single
getEstudiante(id: string) {
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
updateEstudiante(id, estudiante: Estudiantes) {
  return this.estudiantesRef.update({
    IDESTUDIANTE: estudiante.IDESTUDIANTE,
    IDCURSO: estudiante.IDCURSO,
    DIRECCION: estudiante.DIRECCION,
    EDAD: estudiante.EDAD,
    EMAIL: estudiante.EMAIL,
    EPS: estudiante.EPS,
    GRUPO_SANGUINEO:estudiante.GRUPO_SANGUINEO,
    JORNADA:estudiante.JORNADA,
    NOMBRE:estudiante.NOMBRE,
    TELEFONO: estudiante.TELEFONO,
    TIPO_DOCUMENTO: estudiante.TIPO_DOCUMENTO
  })
}
}
