import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { AppGlobals } from '../services/global'

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient, private appGlobals:AppGlobals) { }
  
  servicePost(data){
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
    };
    return this.http.post(this.appGlobals.urlServe,  data, httpOptions)
  }

  serviceSave(registro){
    const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
    };
    var data={pendiente:false}
    return this.http.patch(this.appGlobals.urlServe+""+Number(registro),  data, httpOptions)
  }

  serviceGet(registro){
    return this.http.get(this.appGlobals.urlServe+registro)
  }

}
