import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EstadisticasService } from '../shared/estadisticas/estadisticas.service';
import { FrecuenciaVO } from '../shared/estadisticas/frecuenciavo';
import { SecuenciaVO } from '../shared/estadisticas/secuenciavo';

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
  secuencias:SecuenciaVO[]=[];
  frecuencias:FrecuenciaVO[]=[];
  constructor(estadisticaService:EstadisticasService) { }

  ngOnInit(): void {
  }
  obtenerEstadisticas(){
    switch(this.tipoEstadisticaSeleccionada){
      case "Secuencias":break;
      case "Estrellas":break;
      case "Frecuencias":break;
      default: console.error("tipo estadicticas desconocida");
    }
  }

  obtenerEstrellas(){
    
  }
}
