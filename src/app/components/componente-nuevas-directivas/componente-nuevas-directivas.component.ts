import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente-nuevas-directivas',
  templateUrl: './componente-nuevas-directivas.component.html',
  imports: [FormsModule,CommonModule],
  standalone: true,
  styleUrls: ['./componente-nuevas-directivas.component.css'],
})
export class ComponenteNuevasDirectivasComponent implements OnInit {
  numero1:number = 0;
  numero2:number = 4;
  colorBoton:boolean = true;

  weekarray = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ];

  weekarray2 = [
    'Lunes',
    'Lunes',
    'Lunes',
    'Lunes',
    'Lunes',
    'Lunes',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo',
  ];

  arrayDePersonas = [
    { id: 1, nombre: 'Juan', edad: 25, ciudad: 'Madrid' },
    { id: 2, nombre: 'Ana', edad: 30, ciudad: 'Barcelona' },
    { id: 3, nombre: 'Ana', edad: 22, ciudad: 'Barcelona' },
    { id: 4, nombre: 'Pedro', edad: 35, ciudad: 'Valencia' },
    { id: 26, nombre: 'Luis', edad: 40, ciudad: 'Sevilla' },
  ];

  constructor() {}

  ngOnInit() {}

  cambio(){
    this.colorBoton = !this.colorBoton;
  }

}
