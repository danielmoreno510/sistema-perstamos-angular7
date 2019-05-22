import { Component, ViewChild,OnInit } from '@angular/core';

import { DatosService } from '../services/datos.service'

@Component({
  selector: 'app-registros',
  templateUrl: './registros.component.html',
  styleUrls: ['./registros.component.css']
})
export class RegistrosComponent implements OnInit {
  aprobado=false
  noAprobado=false

  tablePrimaryTextAlign = ["center","center","center","center"]
  tablePrimaryHead=[]
  tablePrimaryBody=[]
  tablePrimaryIds=[]
  tablePrimaryArrayComponents=[
    ["normal"],
    ["normal"],
    ["normal"],
    ["normal"],
    ["normal"]
  ]
  tablePrimaryFilters=["Cedula"]
  show=false

  constructor(private datosService:DatosService) { }

  ngOnInit() {
  }

  aprobados=()=>{
    this.tablePrimaryHead=["Id", "Monto", "Nombre Completo", "Cedula", "Estado"]
    this.tablePrimaryBody=[]
    this.show=false
    this.aprobado=true
    this.noAprobado=false
    this.datosService.serviceGet("").subscribe(
      res => {
        for(var data in res){
          if(res[data]["estado"]){
            var pendiente
            if(res[data]["pendiente"]){
              pendiente="no pagado (clic para pagar)"
            }else{
              pendiente="pagado"
            }
            this.tablePrimaryBody.push([res[data]["id"],res[data]["monto"],res[data]["nombre"],res[data]["cedula"],pendiente])
          }
        }
        this.show=true
        setTimeout(() => {
          for(var i=1; i<=this.tablePrimaryBody.length;i++){
            document.getElementById('table-primary-tr-body-table-primary-1-'+i).addEventListener("click",click);
          }
          var datosService=this.datosService
          var tablePrimaryBody=this.tablePrimaryBody
          function click(this) {
            var principal=document.getElementById(this.id)
            var estado=principal.querySelector("#table-primary-tr-body-table-primary-1-5-var div").innerHTML
            var id=principal.querySelector("#table-primary-tr-body-table-primary-1-1-var div").innerHTML
            if(estado!=" pagado "){
              datosService.serviceSave(id).subscribe(
                res => {
                  for(var j=1; j<tablePrimaryBody.length;j++){
                    if(tablePrimaryBody[j][0]==res["id"]){
                      alert("cambio realizado")
                      location.reload();
                    }
                  }
                },
                err => {
                  console.log(err);
                }
              );
            }
          }
        }, 1000);
        
      },
      err => {
        console.log(err);
      }
    );
  }

  noAprobados=()=>{
    this.tablePrimaryHead=["Monto", "Nombre Completo", "Cedula"]
    this.tablePrimaryBody=[]
    this.show=false
    this.aprobado=false
    this.noAprobado=true
    this.datosService.serviceGet("").subscribe(
      res => {
        for(var data in res){
          if(!res[data]["estado"]){
            this.tablePrimaryBody.push([res[data]["monto"],res[data]["nombre"],res[data]["cedula"]])
          }
        }
        this.show=true
      },
      err => {
        console.log(err);
      }
    );
  }

}
