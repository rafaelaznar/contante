import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class RandomIntegerGeneratorService {

  constructor() { }

  generateRandomInteger(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  randomIntFromInterval(min: number, max: number): number { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

}
