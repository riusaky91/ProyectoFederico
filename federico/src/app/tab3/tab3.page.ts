import { Component } from '@angular/core';

//Provisional hasta que se cree el servicio
import { auth } from 'firebase/app'; 

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}

  email:any;
  password:any;

  

registrar(){

  this.email = document.getElementById("email");//tomo el email
    this.password = document.getElementById("password");//tomo la contraseña

  auth().createUserWithEmailAndPassword(this.email.value, this.password.value).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
    // ...
  });
}

}