import { Component } from '@angular/core';
import { MateriaService } from '../materia.service';
import { Imateria } from '../imateria';

@Component({
  selector: 'app-selector-materias',
  templateUrl: './selector-materias.component.html',
  styleUrl: './selector-materias.component.css'
})
export class SelectorMateriasComponent {
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

}
