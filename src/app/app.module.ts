import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatInputModule, MatButtonModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ButtonSimpleModule,TablePrimaryModule} from 'turing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DatosComponent } from './datos/datos.component';
import { FinalComponent } from './final/final.component';
import { RegistrosComponent } from './registros/registros.component';

import { DatosService } from './services/datos.service';
import { AppGlobals } from './services/global';
import { NoComponent } from './final/no/no.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DatosComponent,
    FinalComponent,
    RegistrosComponent,
    NoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TablePrimaryModule
  ],
  providers: [
    DatosService,
    AppGlobals
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
