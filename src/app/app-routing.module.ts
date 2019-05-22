import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component'
import { DatosComponent } from './datos/datos.component'
import { FinalComponent } from './final/final.component'
import { NoComponent } from './final/no/no.component'
import { RegistrosComponent } from './registros/registros.component'

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'datos-personales',
    component: DatosComponent,
  },
  {
    path: 'final/no',
    component: NoComponent,
  },
  {
    path: 'final/:id',
    component: FinalComponent,
  },
  {
    path: 'registros',
    component: RegistrosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
