import { Component, OnInit } from '@angular/core';
import { RandomIntegerGeneratorService } from '../../services/random-integer-generator.service';

@Component({
  selector: 'app-componente-no-enrutado',
  standalone: true,
  templateUrl: './componente-no-enrutado.component.html',
  styleUrls: ['./componente-no-enrutado.component.css']
})


export class ComponenteNoEnrutadoComponent implements OnInit {

  numeroAleatorio: number = 0;

  constructor(private oRandomIntegerGeneratorService: RandomIntegerGeneratorService) { }

  ngOnInit() {
    this.numeroAleatorio = this.oRandomIntegerGeneratorService.generateRandomInteger(1, 100);
  }

}
