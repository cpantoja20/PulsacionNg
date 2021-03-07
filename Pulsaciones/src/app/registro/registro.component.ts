import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  edad: number = 0;
  sexo: string = "";
  pulsacion: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  add(): void {
   
   if (this.sexo == 'Mujer') {
     this.pulsacion = (220 - this.edad)/100
   } else {
     this.pulsacion=(210-this.edad)/100
   }
  
  }

   
}


