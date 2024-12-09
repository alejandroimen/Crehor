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
  @Input() cursoSelected: Icurso = {
    materia:{
      id: 0,
      name: '',
      credits: 0,
      hours:0,
      grade: 0,
      state: true
    },
    profr: {
      id: 0,
      name: '',
      lastname: '',
      phone: '',
      specialism: 0,
      degree: ''
    },
    grupo: {
      id: 0,
      grade: 0,
      group: '',
      hasSchedule: false
    }
  }
  @Output() cursoSelectedChange = new EventEmitter<Icurso>()
  @Input() isSelected: boolean = false
  @Input() curso!: Icurso


  seleccionar(): void {
    this.unselected.emit(false)
    this.curso.materia.state = true
    this.cursoSelectedChange.emit(this.curso)
    console.log('curso: ', this.curso)
  }
}