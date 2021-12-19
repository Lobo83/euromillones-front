import { DatePipe } from '@angular/common';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { FrecuenciaVO } from './frecuenciavo';
import { SecuenciaVO } from './secuenciavo';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  constructor(private http: HttpClient) { }

  obtenerFrecuencias(fechaInicial:Date,fechaFinal:Date):Observable<FrecuenciaVO[]>{
    let datePipe=new DatePipe('es');
    let params = new HttpParams()
    .set('fechaInicial', datePipe.transform(fechaInicial,'dd-MM-yyyy')!)
    .set('fechaFinal', datePipe.transform(fechaFinal,'dd-MM-yyyy')!);

    return this.http.get<FrecuenciaVO[]>("http://localhost:8080/estadisticas/frecuencias", { params }).pipe(catchError(err => {

      console.log(`Error ${err} invocando a backend`);

      return EMPTY; //Observable.empty YA NO EXISTE
      //Lanznado EMPTY no se entra por la gestion de error pero no se desconecta del observable
      //Si lanzamos throwError(err) entonces entrará por la gestion de error del subscribe padre pero se desregistra todos los observables
    }));
  
  }

  obtenerSecuencias(fechaInicial:Date,fechaFinal:Date,longitud:number):Observable<SecuenciaVO[]>{
    let datePipe=new DatePipe('es');
    let params = new HttpParams()
    .set('fechaInicial', datePipe.transform(fechaInicial,'dd-MM-yyyy')!)
    .set('fechaFinal', datePipe.transform(fechaFinal,'dd-MM-yyyy')!)
    .set('longitud',longitud);

    return this.http.get<SecuenciaVO[]>("http://localhost:8080/estadisticas/sequencias", { params }).pipe(catchError(err => {

      console.log(`Error ${err} invocando a backend`);

      return EMPTY; //Observable.empty YA NO EXISTE
      //Lanznado EMPTY no se entra por la gestion de error pero no se desconecta del observable
      //Si lanzamos throwError(err) entonces entrará por la gestion de error del subscribe padre pero se desregistra todos los observables
    }));
  
  }

  obtenerEstrellasFrecuentes(fechaInicial:Date,fechaFinal:Date):Observable<SecuenciaVO[]>{
    let datePipe=new DatePipe('es');
    let params = new HttpParams()
    .set('fechaInicial', datePipe.transform(fechaInicial,'dd-MM-yyyy')!)
    .set('fechaFinal', datePipe.transform(fechaFinal,'dd-MM-yyyy')!);

    return this.http.get<SecuenciaVO[]>("http://localhost:8080/estadisticas/estrellas_frecuentes", { params }).pipe(catchError(err => {

      console.log(`Error ${err} invocando a backend`);

      return EMPTY; //Observable.empty YA NO EXISTE
      //Lanznado EMPTY no se entra por la gestion de error pero no se desconecta del observable
      //Si lanzamos throwError(err) entonces entrará por la gestion de error del subscribe padre pero se desregistra todos los observables
    }));
  
  }
  
}
