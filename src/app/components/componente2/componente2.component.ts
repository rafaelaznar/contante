import { Component, OnInit } from '@angular/core';
import { RandomIntegerGeneratorService } from '../../services/random-integer-generator.service';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  standalone: true,
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  numRandom: number = 0;

  constructor(private oRandomIntegerGeneratorService: RandomIntegerGeneratorService) { }

  ngOnInit() {

  }

  generarNumero() {
    this.numRandom = this.oRandomIntegerGeneratorService.generateRandomInteger(1, 100);
  }


}
