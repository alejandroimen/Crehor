import { Component } from '@angular/core';

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
}