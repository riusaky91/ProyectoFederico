import { Injectable } from '@angular/core';

//Importando Conexion a Firebase y Entidad
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Cursos } from '../../entidades/cursos/cursos.model';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursosListRef: AngularFireList<any>;
  cursosRef: AngularFireObject<any>;


  constructor(
    private db: AngularFireDatabase
    ) { }


// Create
createCurso(curso: Cursos) {
  return this.cursosListRef.push({
    IDCURSO: curso.IDCURSO,
    DIRECTOR_GRUPO : curso.DIRECTOR_GRUPO,
    SALON: curso.SALON
  })
}

// Read Single
getCurso(id: string) {
  this.cursosRef = this.db.object('/CURSOS/' + id);
  return this.cursosRef;
}

// Read Collection
getCursosList() {
  this.cursosListRef = this.db.list('/CURSOS');
  return this.cursosListRef;
}

// Delete
deleteCurso(id: string) {
  this.cursosRef = this.db.object('/CURSOS/' + id);
  this.cursosRef.remove();
}
  
// Update
updateCurso(id, curso: Cursos) {
  return this.cursosRef.update({
    IDCURSO: curso.IDCURSO,
    DIRECTOR_GRUPO : curso.DIRECTOR_GRUPO,
    SALON: curso.SALON
  })
}


}
