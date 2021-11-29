import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-jugadas',
  templateUrl: './jugadas.component.html',
  styleUrls: ['./jugadas.component.css']
})
export class JugadasComponent implements OnInit {

  fechaHasta = new FormControl();
  fechaDesde = new FormControl('',[Validators.required]);
  longitudSecuencia = new FormControl('', [Validators.required]);
  numeroJugadas = new FormControl('', [Validators.required]);
  frecuenciaMinima = new FormControl('', [Validators.required]);
  

  tipoJugadas: String[]= ["Aleatoria","Frecuencias"];
  constructor() { }

  ngOnInit(): void {
  }

}
