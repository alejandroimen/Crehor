import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-complete',
  templateUrl: './card-complete.component.html',
  styleUrl: './card-complete.component.css'
})
export class CardCompleteComponent {
  @Input() nombre: string = ''
  @Input() codigo: string = ''
  @Input() creditos: number = 0
  @Input() profr: string = ''
  @Input() horas: number = 0
  @Input() grado: number = 0
}