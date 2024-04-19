import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.css']
})
export class PrincipalPageComponent implements OnInit {
  secret =  Math.floor(Math.random()* 100) + 1;
  userNumber: number;
  message: string;

  constructor() { 
    this.message = '';
    this.userNumber = null;
  }

  ngOnInit(): void {
    this.getSecret();
  }

  getSecret(){
    console.log("El número secreto es:" + this.secret);
  }

  logout(): void {
    
    console.log('Cerrando sesión...');
  }

  play(){
    console.log('boton clickeado');
    if(isNaN(this.userNumber)) {
      this.message = 'Por favor, introduce un número ';
      return;
    }

    if(this.userNumber > this.secret) {
      this.message = 'El número es demasiado alto';
      console.log('El número es demasiado alto');
      
      return;
    }
    if(this.userNumber < this.secret) {
      this.message = 'El número es demasiado bajo';
      console.log('El número es demasiado bajo');
      
      return;
    }
    else {
      this.message = 'Enhorabuena, has acertado';
      console.log('Enhorabuena, has acertado');
      
      return;
    }
  }

  validateInput(event: KeyboardEvent) {
     const charCode = event.which ? event.which : event.keyCode;
     if (charCode > 31 && (charCode < 48 || charCode > 57)){
      event.preventDefault();
     }

  }

}
