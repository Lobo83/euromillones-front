import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JugadaVO } from './jugadavo';

/**
 *
 *
 * @export
 * @class JugadasService
 */
@Injectable({
  providedIn: 'root'
})
export class JugadasService {

  /**
   * Creates an instance of JugadasService.
   * @param {HttpClient} http
   * @memberof JugadasService
   */
  constructor(private http: HttpClient) { }

  /**
   *
   *
   * @param {number} numeroJugadas
   * @return {*}  {Observable<JugadaVO[]>}
   * @memberof JugadasService
   */
  obtenerJugadasAleatorias(numeroJugadas:number):Observable<JugadaVO[]>{
    let params = new HttpParams().set('numeroJugadas', numeroJugadas);
    return this.http.get<JugadaVO[]>("http://localhost:8080/jugada/aleatoria", { params }).pipe(catchError(err => {

      console.log(`Error ${err} invocando a backend`);

      return EMPTY; //Observable.empty YA NO EXISTE
      //Lanznado EMPTY no se entra por la gestion de error pero no se desconecta del observable
      //Si lanzamos throwError(err) entonces entrará por la gestion de error del subscribe padre pero se desregistra todos los observables
    }));
  }

  /**
   *
   *
   * @param {number} longitud
   * @param {Date} fechaInicial
   * @param {Date} fechaFinal
   * @param {number} frecuenciaMinima
   * @param {number} numeroJugadas
   * @return {*}  {Observable<JugadaVO[]>}
   * @memberof JugadasService
   */
  obtenerJugadasFrequentes(longitud: number, fechaInicial: Date, fechaFinal: Date, frecuenciaMinima: number, numeroJugadas: number): Observable<JugadaVO[]> {
    let params = new HttpParams().set('numeroJugadas', numeroJugadas).
    set('longitud',longitud)
    .set('fechaInicial',fechaInicial.toDateString())
    .set('fechaFinal',fechaFinal.toDateString())
    .set('numeroJugadas',numeroJugadas);

    return this.http.get<JugadaVO[]>("http://localhost:8080/jugada/frecuente",{params}).pipe(catchError(err => {
      
        console.log(`Error ${err} invocando a backend`);
      
      return EMPTY; //Observable.empty YA NO EXISTE
      //Lanznado EMPTY no se entra por la gestion de error pero no se desconecta del observable
      //Si lanzamos throwError(err) entonces entrará por la gestion de error del subscribe padre pero se desregistra todos los observables
    }));
  }
}
