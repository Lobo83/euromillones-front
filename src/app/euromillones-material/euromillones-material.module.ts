import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';




@NgModule({
  declarations: [],
  imports: [
    MatInputModule
  ],
  
  exports: [MatToolbarModule, MatIconModule, MatMenuModule, MatButtonModule, MatInputModule, MatSelectModule, MatCardModule, MatFormFieldModule]
})
export class EuromillonesMaterialModule { }
