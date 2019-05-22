import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { DatosService } from '../services/datos.service'

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})

export class DatosComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email,]);
  nombreFormControl = new FormControl('', [Validators.required,]);
  cedulaFormControl = new FormControl('', [Validators.required,]);
  fecha
  monto = localStorage.getItem("monto")
  resutls
  @Output() cambioMonto= new EventEmitter();
  constructor(private router: Router, private datosService:DatosService) {}

  ngOnInit() {
    if(this.monto==null || this.monto==""){
      this.router.navigate(['/']);
    }
  }

  solicitar=()=>{
    if(this.emailFormControl.valid && this.nombreFormControl.valid && this.cedulaFormControl.valid){
      var random= Math.random() >= 0.5;
      var pendiente=true
      if(!random){
        pendiente=false
      }
      this.datosService.serviceGet("").subscribe(
        res => {
          this.resutls=res
          for(var i=0; i<this.resutls.length; i++){
            if(res[i].cedula==this.cedulaFormControl.value){
              random = true
              pendiente=true
              i=this.resutls.length
            }
          }
          let data={
            "nombre":this.nombreFormControl.value,
            "cedula":this.cedulaFormControl.value.toString(),
            "email":this.emailFormControl.value,
            "fecha":this.fecha,
            "monto":this.monto,
            "estado":random,
            "pendiente":pendiente
          }
          var entrar=true
          for(var i=0; i<this.resutls.length; i++){
            if(res[i].cedula==this.cedulaFormControl.value && res[i].pendiente){
              console.log(res[i])
              entrar = false
              i=this.resutls.length
            }
          }
          if(entrar){
            this.datosService.servicePost(data).subscribe(
              res => {
                localStorage.removeItem("monto");
                if(res["estado"]){
                  this.cambioMonto.emit(res["monto"])
                }
                this.router.navigate(['/final/'+res["id"]]);
              },
              err => {
                console.log(err);
              }
            );
          }else{
            this.router.navigate(['/final/no']);
          }
        },
        err => {
          console.log(err);
        }
      );
    }
  }

}
