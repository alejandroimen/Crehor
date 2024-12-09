import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grupo-card',
  templateUrl: './grupo-card.component.html',
  styleUrl: './grupo-card.component.css'
})
export class GrupoCardComponent {
  @Input() id: number = 0
  @Input() grado: number = 0
  @Input() grupo: string = ''
  @Input() horario: boolean = false 

  constructor(private router: Router) {}

  goToSchedule():void {
    this.router.navigate(['/horario', this.id])
  }
}
