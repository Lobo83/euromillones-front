import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadasComponent } from './jugadas.component';
import { RouterModule } from '@angular/router';
import {EuromillonesMaterialModule} from '../euromillones-material/euromillones-material.module';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


/**
 *
 *
 * @export
 * @class JugadasModule
 */
@NgModule({
  declarations: [
    JugadasComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,

    EuromillonesMaterialModule,
    RouterModule.forChild([{ path: '', component: JugadasComponent }])
  ]
})
export class JugadasModule { }
