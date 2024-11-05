import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Imateria } from '../../materias/interfaces/imateria';
@Component({
  selector: 'app-pantilla-dias-horario',
  templateUrl: './pantilla-dias-horario.component.html',
  styleUrl: './pantilla-dias-horario.component.css'
})
export class PantillaDiasHorarioComponent {
  dias: string[] = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes"
  ]
  @Input() materiaCandidata: Imateria = {
    codigo: 0,
    nombre: '',
    numCreditos: 0,
    horasPorSemana: 0,
    grado: 0,
    estado: true
  }
}