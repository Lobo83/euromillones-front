import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JugadasComponent } from './jugadas.component';
import { RouterModule } from '@angular/router';
import {EuromillonesMaterialModule} from '../euromillones-material/euromillones-material.module';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatListModule} from '@angular/material/list';

import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs, 'es');
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
    MatListModule,
    EuromillonesMaterialModule,
    RouterModule.forChild([{ path: '', component: JugadasComponent }])
  ],
  providers: [ { provide: LOCALE_ID, useValue: 'es' } ],
})
export class JugadasModule { }
