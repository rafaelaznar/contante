import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RandomIntegerGeneratorService } from '../../services/random-integer-generator.service';

@Component({
  selector: 'app-componente3',
  templateUrl: './componente3.component.html',
  styleUrls: ['./componente3.component.css']
})
export class Componente3Component implements OnInit {

  min: number = 0;
  max: number = 100;
  randomNumber: number = 0;

  constructor(private oActivatedRoute: ActivatedRoute, private oRandomIntegerGeneratorService: RandomIntegerGeneratorService) {
    this.min = parseInt(this.oActivatedRoute.snapshot.paramMap.get('min') || '0');
    this.max = parseInt(this.oActivatedRoute.snapshot.paramMap.get('max') || '100');
    this.randomNumber = this.oRandomIntegerGeneratorService.generateRandomInteger(this.min, this.max);
  }

  ngOnInit() {
  }

}
