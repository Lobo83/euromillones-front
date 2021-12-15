import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JugadaVO } from './jugadavo';

@Injectable({
  providedIn: 'root'
})
export class JugadasService {

  constructor(private http: HttpClient) { }

  obtenerJugadasAleatorias(numeroJugadas:number):Observable<JugadaVO[]>{
    let params = new HttpParams().set('numeroJugadas', numeroJugadas);
    return this.http.get<JugadaVO[]>("http://localhost:8080/jugada/aleatoria?numeroJugadas=1").pipe(catchError(err => {
      
        console.log(`Error ${err} invocando a backend`);
      
      return EMPTY; //Observable.empty YA NO EXISTE
      //Lanznado EMPTY no se entra por la gestion de error pero no se desconecta del observable
      //Si lanzamos throwError(err) entonces entrará por la gestion de error del subscribe padre pero se desregistra todos los observables
    }));
  }
}
