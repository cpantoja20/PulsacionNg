import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Consultar() {
    var personasRegistradas = [];
    if (localStorage.getItem('pulsacion') != null) {
        personasRegistradas = JSON.parse(localStorage.getItem('pulsacion'));
    }
    personasRegistradas.forEach(item => {
        document.getElementById("tPulsacion").innerHTML +=
            '<tr>' +
            '<td  style="dislay: none;">' + item.identificacion + '</td>' +
            '<td  style="dislay: none;">' + item.nombre + '</td>' +
            '<td  style="dislay: none;">' + item.sexo + '</td>' +
            '<td  style="dislay: none;">' + item.edad + '</td>' +
            '<td  style="dislay: none;">' + item.pulsacion + '</td>' + '</tr>';
    });
}

}
