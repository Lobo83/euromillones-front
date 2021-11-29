import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { WrongPageComponent } from './wrong-page/wrong-page.component';
import { HomeComponent } from './home/home.component';
import {EuromillonesMaterialModule} from './euromillones-material/euromillones-material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    WrongPageComponent,
    
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    EuromillonesMaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
