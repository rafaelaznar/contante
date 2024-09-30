import { Component, OnInit } from '@angular/core';
import { ComponenteNoEnrutadoComponent } from '../componente-no-enrutado/componente-no-enrutado.component';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  standalone: true,
  imports: [ ComponenteNoEnrutadoComponent],
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
