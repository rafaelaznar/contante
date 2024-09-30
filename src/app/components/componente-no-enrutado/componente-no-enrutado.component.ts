import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-no-enrutado',
  standalone: true,
  templateUrl: './componente-no-enrutado.component.html',
  styleUrls: ['./componente-no-enrutado.component.css']
})


export class ComponenteNoEnrutadoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
