import { Injectable } from '@angular/core';

//Importando Conexion a Firebase y Entidad
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Cursos } from '../../entidades/Cursos/Cursos.model';

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
createCurso(cursos: Cursos) {
  return this.cursosListRef.push({
    ID_CURSO: cursos.ID_CURSO,
    ID_FUNCIONARIO:cursos.ID_FUNCIONARIO    
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
deleteCursos(id: string) {
  this.cursosRef = this.db.object('/CURSOS/' + id);
  this.cursosRef.remove();
}
  
// Update
updateCurso(id, cursos: Cursos) {
  return this.cursosRef.update({
    ID_CURSO: cursos.ID_CURSO,
    ID_FUNCIONARIO:cursos.ID_FUNCIONARIO
  })
}


}
