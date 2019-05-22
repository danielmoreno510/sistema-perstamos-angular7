import { Injectable } from '@angular/core';

@Injectable()
export class AppGlobals {
    readonly urlServe: string = 'http://localhost:3000/registros/';
    readonly base: number = 10000000;
    readonly minimo: number = 100000;
    readonly maximo: number = 1000000;
} 