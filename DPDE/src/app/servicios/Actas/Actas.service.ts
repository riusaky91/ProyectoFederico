import { Injectable } from '@angular/core';

//Importando Conexion a Firebase y Entidad
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { Actas } from '../../entidades/Actas/Actas.model';

@Injectable({
  providedIn: 'root'
})
export class ActasService {

  actasListRef: AngularFireList<any>;
  actasRef: AngularFireObject<any>;

  constructor(
    private db: AngularFireDatabase
  ) { }

  // Create
createActas(actas: Actas) {
  return this.actasListRef.push({
    COMPROMISO: actas.COMPROMISO,
    DESCARGO_ESTUDIANTE: actas.DESCARGO_ESTUDIANTE,
    DESCRIPCION_CONDUCTA: actas.DESCRIPCION_CONDUCTA,
    ESTUDIANTES_ACUERDAN: actas.ESTUDIANTES_ACUERDAN,
    ESTUDIANTES_COMPROMETEN: actas.ESTUDIANTES_COMPROMETEN,
    FALTA_COMETIDA: actas.FALTA_COMETIDA,
    FECHA_ACTA: actas.FECHA_ACTA,
    FECHA_RESOLUCION: actas.FECHA_RESOLUCION,
    FIRMAS_ACUDIENTES: actas.FIRMAS_ACUDIENTES,
    FIRMA_ESTUDIANTES: actas.FIRMA_ESTUDIANTES,
    FIRMA_FUNCIONARIOS: actas.FIRMA_FUNCIONARIOS,
    ID_ACTA: actas.ID_ACTA,
    ID_ESTUDIANTE: actas.ID_ESTUDIANTE,
    ID_FUNCIONARIO: actas.ID_FUNCIONARIO,
    NOMBRES_ACUDIENTES: actas.NOMBRES_ACUDIENTES,
    RESOLUCION_RECTORAL: actas.RESOLUCION_RECTORAL,
    SANCION_DISCIPLINARIA: actas.SANCION_DISCIPLINARIA,
    TIPO_ACTA: actas.TIPO_ACTA,
    TIPO_FATA: actas.TIPO_FATA
  })
}

// Read Single
getActas(id: string) {
  this.actasRef = this.db.object('/ACTAS/' + id);
  return this.actasRef;
}

// Read Collection
getActasList() {
  this.actasListRef = this.db.list('/ACTAS');
  return this.actasListRef;
}

// Delete
deleteActas(id: string) {
  this.actasRef = this.db.object('/ACTAS/' + id);
  this.actasRef.remove();
}
  
// Update
updateActaSeguimientoDisciplinario(id, actas: Actas) {
  return this.actasRef.update({
    COMPROMISO: actas.COMPROMISO,
    DESCARGO_ESTUDIANTE: actas.DESCARGO_ESTUDIANTE,
    DESCRIPCION_CONDUCTA: actas.DESCRIPCION_CONDUCTA,
    ESTUDIANTES_ACUERDAN: actas.ESTUDIANTES_ACUERDAN,
    ESTUDIANTES_COMPROMETEN: actas.ESTUDIANTES_COMPROMETEN,
    FALTA_COMETIDA: actas.FALTA_COMETIDA,
    FECHA_ACTA: actas.FECHA_ACTA,
    FECHA_RESOLUCION: actas.FECHA_RESOLUCION,
    FIRMAS_ACUDIENTES: actas.FIRMAS_ACUDIENTES,
    FIRMA_ESTUDIANTES: actas.FIRMA_ESTUDIANTES,
    FIRMA_FUNCIONARIOS: actas.FIRMA_FUNCIONARIOS,
    ID_ACTA: actas.ID_ACTA,
    ID_ESTUDIANTE: actas.ID_ESTUDIANTE,
    ID_FUNCIONARIO: actas.ID_FUNCIONARIO,
    NOMBRES_ACUDIENTES: actas.NOMBRES_ACUDIENTES,
    RESOLUCION_RECTORAL: actas.RESOLUCION_RECTORAL,
    SANCION_DISCIPLINARIA: actas.SANCION_DISCIPLINARIA,
    TIPO_ACTA: actas.TIPO_ACTA,
    TIPO_FATA: actas.TIPO_FATA
  })
}


  
}
