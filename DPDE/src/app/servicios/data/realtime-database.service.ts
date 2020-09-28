import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Cursos } from '../../entidades/Cursos/Cursos.model';

@Injectable({
  providedIn: 'root'
})
export class RealtimeDatabaseService {
  itemRef: any;
  data: any;
  itemsRef: AngularFireList<any>;
  items: Observable<any[]>;
  cursos : Cursos;
  changes : any;

  constructor(
    private db : AngularFireDatabase
    ) { 
      this.itemsRef = db.list('messages');
      // Use snapshotChanges().map() to store the key
      this.items = this.itemsRef.snapshotChanges().pipe(
        map(changes => 
          changes.map(c => ({ key: c.payload.key, ...c.payload.val()  } )
          )
          
        )
        
      );
     
    }




  findList(){
    this.itemsRef = this.db.list('cursos');
    this.itemsRef.snapshotChanges(['child_added'])
    .subscribe(actions => {
      actions.forEach(action => {
        //console.log(action.type);
        //console.log(action.key);
        //console.log(action.payload.val().curso);
        this.cursos = action.payload.val().curso;
        //console.log(this.cursos);
        return this.cursos;
      });
    });
  }

  listItem(){
    return this.cursos;
  }

  addItem(newName: string) {
    this.itemsRef.push({ text: newName });
  }
  updateItem(key: string, newText: string) {
    this.itemsRef.update(key, { text: newText });
  }
  deleteItem(key: string) {
    this.itemsRef.remove(key);
  }
  deleteEverything() {
    this.itemsRef.remove();
  }

}
