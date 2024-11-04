import { Component } from '@angular/core';
import { Imateria } from '../../materias/interfaces/imateria';

@Component({
  selector: 'app-vista-materias',
  templateUrl: './vista-materias.component.html',
  styleUrl: './vista-materias.component.css'
})
export class VistaMateriasComponent {
  visibleForm:boolean = false
  materias: Imateria[] = [
    {
      codigo: 'FBD',
      nombre: 'Fundamentos de bases de datos',
      numCreditos: 10,
      horasPorSemana: 6,
      grado: 3,
      estado: true
    },
    {
      codigo: 'PRV',
      nombre: 'Programación Visual',
      numCreditos: 10,
      horasPorSemana: 7,
      grado: 3,
      estado: true
    },
    {
      codigo: 'ALG',
      nombre: 'Algoritmos',
      numCreditos: 10,
      horasPorSemana: 8,
      grado: 1,
      estado: true
    },
    {
      codigo: 'EDA',
      nombre: 'Estructuras de datos avanzadas',
      numCreditos: 10,
      horasPorSemana: 4,
      grado: 3,
      estado: true
    }
  ]
  changeVisibility():void {
    this.visibleForm = !this.visibleForm
  }
}
