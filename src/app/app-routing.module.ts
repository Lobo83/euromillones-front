import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WrongPageComponent } from './wrong-page/wrong-page.component';

/** @type {*} */
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'jugadas', loadChildren: () => import('./jugadas/jugadas.module').then(m => m.JugadasModule) },
  { path: 'estadisticas', loadChildren: () => import('./estadisticas/estadisticas.module').then(m => m.EstadisticasModule) },
  { path: '**', component: WrongPageComponent }
];

/**
 *
 *
 * @export
 * @class AppRoutingModule
 */
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
