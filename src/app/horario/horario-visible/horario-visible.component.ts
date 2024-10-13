import { Component } from '@angular/core';

@Component({
  selector: 'app-horario-visible',
  templateUrl: './horario-visible.component.html',
  styleUrl: './horario-visible.component.css'
})
export class HorarioVisibleComponent {
  dias: string[] = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes"
  ]
}
