import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-imc-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './imc-component.component.html',
  styleUrls: ['./imc-component.component.css'],
})
export class ImcComponentComponent implements OnInit {
  imc: number = 0;
  peso: number = 0;
  altura: number = 0;

  constructor(private oHttp: HttpClient) {}

  ngOnInit() {}

  calcularIMC() {
    //faltaría checkear que los valores son correctos

    let data2send = {
      peso: this.peso,
      altura: this.altura,
    };

    this.oHttp
      .post<any>('http://localhost:8085/imc/calcular', data2send)
      .subscribe({
        next: (data: any) => {
          console.log(data);
          this.imc = data.imc;
        },
        error: (error: HttpErrorResponse) => {
          console.log(error);
        },
      });
  }
}
