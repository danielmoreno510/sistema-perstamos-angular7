import { Component, OnInit } from '@angular/core';
import { Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { AppGlobals } from '../services/global'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  monto
  montoControl
  constructor(private router: Router, private appGlobals:AppGlobals) {}

  ngOnInit() {
    this.montoControl = new FormControl(this.monto, [Validators.max(this.appGlobals.maximo), Validators.min(this.appGlobals.minimo)])
  }

  solicitar=()=>{
    if(this.montoControl.valid){
      localStorage.setItem('monto', this.montoControl.value);
      this.router.navigate(['/datos-personales']);
    }
  }

}
