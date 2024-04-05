import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-page',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.css']
})
export class PrincipalPageComponent implements OnInit {
  secret =  Math.floor(Math.random()* 100) + 1;

  constructor() { }

  ngOnInit(): void {
    this.getSecret();
  }

  getSecret(){
    console.log("El número secreto es:" + this.secret);
  }

}
