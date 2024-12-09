import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MateriaService } from '../materia.service';
@Component({
  selector: 'app-materia-card',
  templateUrl: './materia-card.component.html',
  styleUrl: './materia-card.component.css'
})
export class MateriaCardComponent {
  @Input() visibleDelete:boolean = false
  @Output() visibleDeleteChange = new EventEmitter<boolean>()
  @Output() visibleChange = new EventEmitter<boolean>()
  @Output() iChange = new EventEmitter<number>()
  @Input() visible:boolean = false
  @Input() i:number = -1
  @Input() nombre: string = ''
  @Input() id: number = 0
  @Input() creditos: number = 0
  @Input() grado: number = 0

  constructor(private matServ: MateriaService) {}

  openDelete(): void {
    this.i = this.id
    this.visibleDeleteChange.emit(!this.visibleDelete);
    this.iChange.emit(this.i); // emite el valor actualizado
  }

  openEdit(): void {
    this.i = this.id
    this.visibleChange.emit(!this.visible);
    this.iChange.emit(this.i);
  }
}
