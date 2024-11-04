import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Imateria } from '../interfaces/imateria';
import { Iprofesor } from '../../profesores/interfaces/Iprofesor';
import { Icurso } from '../interfaces/icurso';
import { Igrupo } from '../../grupos/interfaces/igrupo';
@Component({
  selector: 'app-card-complete',
  templateUrl: './card-complete.component.html',
  styleUrl: './card-complete.component.css'
})
export class CardCompleteComponent {
  @Output() unselected = new EventEmitter<boolean>()
  @Output() materiaSelectedChange = new EventEmitter<Imateria>()
  @Input() isSelected: boolean = false
  @Input() materiaSelected: Imateria = {
    codigo: '',
    nombre: '',
    numCreditos: 0,
    horasPorSemana: 0,
    grado: 0,
    estado: false
  }
  @Input() materia: Imateria = {
    codigo: '',
    nombre: '',
    numCreditos: 0,
    horasPorSemana: 0,
    grado: 0,
    estado: false
  }
  @Input() profr: string = ''

  seleccionar(): void {
    this.unselected.emit(false)
    this.materia.estado = true
    this.materiaSelectedChange.emit(this.materia)
    console.log('curso: ', this.materia)
  }
}