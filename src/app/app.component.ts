import { Component } from '@angular/core';
import { Imateria } from './materias/imateria';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App-web';
  materias: Imateria[] = [
    {
      codigo: 'ALG',
      nombre: 'Algebra',
      numCreditos: 10,
      horasPorSemana: 5,
      grado: 1,
      estado: true
    },
    {
      codigo: 'FIS',
      nombre: 'Fisica',
      numCreditos: 10,
      horasPorSemana: 6,
      grado: 3,
      estado: true
    },
    {
      codigo: 'EXO',
      nombre: 'Expresion oral',
      numCreditos: 10,
      horasPorSemana: 3,
      grado: 1,
      estado: true
    },
    {
      codigo: 'QUI',
      nombre: 'Quimica',
      numCreditos: 10,
      horasPorSemana: 4,
      grado: 2,
      estado: true
    },
    {
      codigo: 'CAD',
      nombre: 'Calculo diferencial',
      numCreditos: 10,
      horasPorSemana: 6,
      grado: 3,
      estado: true
    }
  ]

  ngOnInit(){
    localStorage.setItem("listaMaterias", JSON.stringify(this.materias));
  }
}
