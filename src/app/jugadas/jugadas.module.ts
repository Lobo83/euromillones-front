import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadasComponent } from './jugadas.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    JugadasComponent
  ],
  imports: [
    CommonModule,RouterModule.forChild([{path: '', component: JugadasComponent}])
  ],
  exports: [RouterModule]
})
export class JugadasModule { }
