import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadisticasComponent } from './estadisticas.component';
import { RouterModule } from '@angular/router';
import {EuromillonesMaterialModule} from '../euromillones-material/euromillones-material.module';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    EstadisticasComponent
  ],
  
  imports: [
    EuromillonesMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatListModule,
    CommonModule,RouterModule.forChild([{path: '', component: EstadisticasComponent}])
  ]
})
export class EstadisticasModule { }
