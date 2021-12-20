import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { EstadisticasService } from '../shared/estadisticas/estadisticas.service';
import { FrecuenciaVO } from '../shared/estadisticas/frecuenciavo';
import { SecuenciaVO } from '../shared/estadisticas/secuenciavo';

/**
 *
 *
 * @export
 * @class EstadisticasComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  /**
   *
   *
   * @memberof EstadisticasComponent
   */
  fechaHasta = new FormControl();
  fechaDesde = new FormControl('', [Validators.required]);
  longitudSecuencia = new FormControl('');
  tipoEstadistica: String[] = ["Secuencias", "Estrellas","Frecuencias"];
  tipoEstadisticaSeleccionada: String = "";
  secuencias:SecuenciaVO[]=[];
  frecuencias:FrecuenciaVO[]=[];
  resultados:string[]=[];

  /**
   * Creates an instance of EstadisticasComponent.
   * @param {EstadisticasService} estadisticaService
   * @memberof EstadisticasComponent
   */
  constructor(private estadisticaService:EstadisticasService) { }

  ngOnInit(): void {
  }
  /**
   *
   *
   * @memberof EstadisticasComponent
   */
  obtenerEstadisticas(){
    this.resultados=[];
    switch(this.tipoEstadisticaSeleccionada){
      case "Secuencias":
      this.obtenerSecuencias(this.fechaDesde.value,this.fechaHasta.value,this.longitudSecuencia.value).subscribe(respuesta => 
        {this.secuencias = respuesta;
          this.secuencias.forEach(secuencia=>{
            this.resultados.push(secuencia.numeros.join('-')+" "+secuencia.frecuencia)
            
          });
        });  
      break;
      
      case "Estrellas":
        this.obtenerEstrellas(this.fechaDesde.value,this.fechaHasta.value).subscribe(respuesta => 
          {this.secuencias = respuesta;
            this.secuencias.forEach(secuencia=>{
              this.resultados.push(secuencia.numeros.join('-')+" frecuencia: "+secuencia.frecuencia)
              
            });
          });
        break;
      case "Frecuencias":
      this.obtenerFrecuencias(this.fechaDesde.value,this.fechaHasta.value).subscribe(respuesta => {
        this.frecuencias = respuesta
        this.frecuencias.forEach(frecuencia =>{
          this.resultados.push("valor: "+frecuencia.valor+" frecuencia: "+frecuencia.frecuencia+" frecuencia relativa:"+frecuencia.frecuenciaRelativa+" estrella: "+ String(frecuencia.estrella))
        })
      });  
      break;
      default: console.error("tipo estadicticas desconocida");
    }
    this.componerResultados();
  }

  componerResultados(){

  }
  /**
   *
   *
   * @param {Date} fechaInicial
   * @param {Date} fechaFinal
   * @return {*}  {Observable<SecuenciaVO[]>}
   * @memberof EstadisticasComponent
   */
  obtenerEstrellas(fechaInicial:Date,fechaFinal:Date):Observable<SecuenciaVO[]>{
    let result: Observable<SecuenciaVO[]> = this.estadisticaService.obtenerEstrellasFrecuentes(fechaInicial, fechaFinal).pipe(
      catchError(error => {
        console.log(`Error ${error} obteniendo jugadas`);
        return of([]);
      })
    )
    return result;
  }

  /**
   *
   *
   * @param {Date} fechaInicial
   * @param {Date} fechaFinal
   * @param {number} longitudSecuencia
   * @return {*}  {Observable<SecuenciaVO[]>}
   * @memberof EstadisticasComponent
   */
  obtenerSecuencias(fechaInicial:Date,fechaFinal:Date, longitudSecuencia:number):Observable<SecuenciaVO[]>{
    let result: Observable<SecuenciaVO[]> = this.estadisticaService.obtenerSecuencias(fechaInicial, fechaFinal,longitudSecuencia).pipe(
      catchError(error => {
        console.log(`Error ${error} obteniendo jugadas`);
        return of([]);
      })
    )
    return result;
  }
  /**
   *
   *
   * @param {Date} fechaInicial
   * @param {Date} fechaFinal
   * @return {*}  {Observable<FrecuenciaVO[]>}
   * @memberof EstadisticasComponent
   */
  obtenerFrecuencias(fechaInicial:Date,fechaFinal:Date):Observable<FrecuenciaVO[]>{
    let result: Observable<FrecuenciaVO[]> = this.estadisticaService.obtenerFrecuencias(fechaInicial, fechaFinal).pipe(
      catchError(error => {
        console.log(`Error ${error} obteniendo jugadas`);
        return of([]);
      })
    )
    return result;
  }

  limpiarResultados(){
    this.frecuencias=[];
    this.secuencias=[];
  }

}
