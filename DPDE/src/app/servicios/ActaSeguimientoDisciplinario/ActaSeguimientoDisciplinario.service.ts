import { Injectable } from '@angular/core';

//Importando Conexion a Firebase y Entidad
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { ActaSeguimientoDisciplinario } from '../../entidades/ActaSeguimientoDisciplinario/ActaSeguimientoDisciplinario.model';

@Injectable({
  providedIn: 'root'
})
export class ActaSeguimientoDisciplinarioService {

  actaSeguimientoDisciplinarioListRef: AngularFireList<any>;
  actaSeguimientoDisciplinarioRef: AngularFireObject<any>;

  constructor(
    private db: AngularFireDatabase
  ) { }

  // Create
createActaSeguimientoDisciplinario(actaSeguimientoDisciplinario: ActaSeguimientoDisciplinario) {
  return this.actaSeguimientoDisciplinarioListRef.push({
    COMPROMISO: actaSeguimientoDisciplinario.COMPROMISO,
    DESCARGO_ESTUDIANTE: actaSeguimientoDisciplinario.DESCARGO_ESTUDIANTE,
    DESCRIPCION_DE_CONDUCTA: actaSeguimientoDisciplinario.DESCRIPCION_DE_CONDUCTA,
    FECHA_ACTA: actaSeguimientoDisciplinario.FECHA_ACTA,
    FIRMA_ESTUDIANTE: actaSeguimientoDisciplinario.FIRMA_ESTUDIANTE,
    FIRMA_DOCENTES: actaSeguimientoDisciplinario.FIRMA_DOCENTES,
    TIPO: actaSeguimientoDisciplinario.TIPO,
    ID_ACTA : actaSeguimientoDisciplinario.ID_ACTA
  })
}

// Read Single
getActaSeguimientoDisciplinario(id: string) {
  this.actaSeguimientoDisciplinarioRef = this.db.object('/ACTA/' + id);
  return this.actaSeguimientoDisciplinarioRef;
}

// Read Collection
getActaSeguimientoDisciplinarioList() {
  this.actaSeguimientoDisciplinarioListRef = this.db.list('/ACTA');
  return this.actaSeguimientoDisciplinarioListRef;
}

// Delete
deleteActaSeguimientoDisciplinario(id: string) {
  this.actaSeguimientoDisciplinarioRef = this.db.object('/ACTA/' + id);
  this.actaSeguimientoDisciplinarioRef.remove();
}
  
// Update
updateActaSeguimientoDisciplinario(id, actaSeguimientoDisciplinario: ActaSeguimientoDisciplinario) {
  return this.actaSeguimientoDisciplinarioRef.update({
    COMPROMISO: actaSeguimientoDisciplinario.COMPROMISO,
    DESCARGO_ESTUDIANTE: actaSeguimientoDisciplinario.DESCARGO_ESTUDIANTE,
    DESCRIPCION_DE_CONDUCTA: actaSeguimientoDisciplinario.DESCRIPCION_DE_CONDUCTA,
    FECHA_ACTA: actaSeguimientoDisciplinario.FECHA_ACTA,
    FIRMA_ESTUDIANTE: actaSeguimientoDisciplinario.FIRMA_ESTUDIANTE,
    FIRMA_DOCENTES: actaSeguimientoDisciplinario.FIRMA_DOCENTES,
    TIPO: actaSeguimientoDisciplinario.TIPO,
    ID_ACTA : actaSeguimientoDisciplinario.ID_ACTA
  })
}


  
}
