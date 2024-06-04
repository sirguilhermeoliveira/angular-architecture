import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberUtils {

  constructor() { }

  parseToCurrency(value: number): string {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
}