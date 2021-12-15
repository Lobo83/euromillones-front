import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
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
  constructor(private jugadasService: JugadasService) { }

  ngOnInit(): void {

    this.numeroJugadas.valueChanges.pipe(switchMap(numJugadas => this.obtenerJugadasAleatorias(numJugadas))).subscribe(
      respuesta => { this.jugadas = respuesta }
    );

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
