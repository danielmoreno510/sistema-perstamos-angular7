import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { DatosService } from '../services/datos.service'

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {
  estado
  constructor(private router: Router, private route: ActivatedRoute,private datosService:DatosService) { }

  ngOnInit() {
    localStorage.removeItem("monto");
    this.datosService.serviceGet("/"+this.route.params["_value"].id).subscribe(
      res => {
       this.estado=res["estado"]
      },
      err => {
        console.log(err);
      }
    );
  }

}
