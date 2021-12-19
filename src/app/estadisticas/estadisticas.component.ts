import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EstadisticasService } from '../shared/estadisticas/estadisticas.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  fechaHasta = new FormControl();
  fechaDesde = new FormControl('', [Validators.required]);
  longitudSecuencia = new FormControl('');
  tipoEstadistica: String[] = ["Secuencias", "Estrellas","Frecuencias"];
  tipoEstadisticaSeleccionada: String = "";
  constructor(estadisticaService:EstadisticasService) { }

  ngOnInit(): void {
  }
  obtenerEstadisticas(){}
}
