import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DatosService } from './services/datos.service'
import { AppGlobals } from './services/global'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  monto
  constructor(private router: Router, private appGlobals:AppGlobals, private datosService:DatosService){
    this.monto=this.appGlobals.base
    this.datosService.serviceGet("").subscribe(
      res => {
        for(var data in res){
          if(res[data].estado && res[data].pendiente){
            this.monto=this.monto-Number(res[data].monto)
          }
        }
      },
      err => {
        console.log(err);
      }
    );
  }
  
  registros=()=>{
    this.router.navigate(['/registros']);
  }

  onActivate(elementRef){
    if(elementRef.cambioMonto){
      elementRef.cambioMonto.subscribe(event => {
        this.monto=this.monto-Number(event);
      });
    }
  }
}
