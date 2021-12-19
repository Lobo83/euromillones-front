import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JugadasService } from '../shared/jugadas/jugadas.service';
import { JugadaVO } from '../shared/jugadas/jugadavo';

@Component({
  selector: 'app-jugadas',
  templateUrl: './jugadas.component.html',
  styleUrls: ['./jugadas.component.css']
})
export class JugadasComponent implements OnInit {

  fechaHasta = new FormControl();
  fechaDesde = new FormControl('', [Validators.required]);
  longitudSecuencia = new FormControl('', [Validators.required]);
  numeroJugadas = new FormControl('', [Validators.required]);
  frecuenciaMinima = new FormControl('', [Validators.required]);
  jugadas: JugadaVO[] = [];

  tipoJugadas: String[] = ["Aleatoria", "Frecuencias"];
  tipoJugadaSeleccionada: String = "";
  constructor(private jugadasService: JugadasService) { }

  ngOnInit(): void {

    /*this.numeroJugadas.valueChanges.pipe(switchMap(numJugadas => this.obtenerJugadasAleatorias(numJugadas))).subscribe(
      respuesta => { this.jugadas = respuesta }
    );*/

  }


  /**
   *
   *
   * @memberof JugadasComponent
   */
  generarJugadas() {
    switch (this.tipoJugadaSeleccionada) {
      case "Aleatoria":
        this.obtenerJugadasAleatorias(this.numeroJugadas.value).subscribe(respuesta => this.jugadas = respuesta);
        break;

      case "Frecuencias":
        this.obtenerJugadasFrecuentes(this.longitudSecuencia.value, this.fechaDesde.value, this.fechaHasta.value,
          this.frecuenciaMinima.value, this.numeroJugadas.value).subscribe(respuesta => this.jugadas = respuesta);
        break;

      default:
        console.log("Error, tipo jugada no valida");
    }
  }
  /**
   *
   *
   * @param {number} longitudSecuencia
   * @param {Date} fechaDesde
   * @param {Date} fechaHasta
   * @param {number} frecuenciaMinima
   * @param {number} numeroJugadas
   * @return {*}  {Observable<JugadaVO[]>}
   * @memberof JugadasComponent
   */
  obtenerJugadasFrecuentes(longitudSecuencia: number, fechaDesde: Date, fechaHasta: Date, frecuenciaMinima: number, numeroJugadas: number): Observable<JugadaVO[]> {
    let result: Observable<JugadaVO[]> = this.jugadasService.obtenerJugadasFrequentes(longitudSecuencia, fechaDesde, fechaHasta, frecuenciaMinima, numeroJugadas).pipe(
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
   * @param {number} numeroJugadas
   * @return {*}  {Observable<JugadaVO[]>}
   * @memberof JugadasComponent
   */
  obtenerJugadasAleatorias(numeroJugadas: number): Observable<JugadaVO[]> {
    let result: Observable<JugadaVO[]> = of([]);
    if (this.numeroJugadas.value) {
      result = this.jugadasService.obtenerJugadasAleatorias(numeroJugadas).pipe(
        catchError(error => {
          console.log(`Error ${error} obteniendo jugadas`);
          return of([]);
        })
      )
    }

    return result;
  }
}
