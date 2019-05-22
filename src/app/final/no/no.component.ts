import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no',
  templateUrl: './no.component.html',
  styleUrls: ['./no.component.css']
})
export class NoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    localStorage.removeItem("monto");
  }

}
