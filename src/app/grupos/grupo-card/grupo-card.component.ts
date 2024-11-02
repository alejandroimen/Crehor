import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grupo-card',
  templateUrl: './grupo-card.component.html',
  styleUrl: './grupo-card.component.css'
})
export class GrupoCardComponent {
  @Input() grado: number = 0
  @Input() grupo: string = ''
  @Input() horario: boolean = false 
}
