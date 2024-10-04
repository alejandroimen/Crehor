import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-materia-card',
  templateUrl: './materia-card.component.html',
  styleUrl: './materia-card.component.css'
})
export class MateriaCardComponent {
  @Input() nombre: string = ''
  @Input() codigo: string = ''
  @Input() creditos: number = 0
  @Input() grado: number = 0
}
