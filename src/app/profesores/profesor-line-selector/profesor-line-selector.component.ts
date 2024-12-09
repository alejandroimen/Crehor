import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Iprofesor } from '../interfaces/Iprofesor';
import { Icurso } from '../../materias/interfaces/icurso';

@Component({
  selector: 'app-profesor-line-selector',
  templateUrl: './profesor-line-selector.component.html',
  styleUrl: './profesor-line-selector.component.css'
})
export class ProfesorLineSelectorComponent {
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
  @Input() isSelected: boolean = false; 
  @Input() prof: Iprofesor={
    id: 0,
    name: '',
    lastname: '',
    phone: '',
    specialism: 0,
    degree: ''
  }

  seleccionar():void {
    this.cursoSelected.profr = this.prof
    this.cursoSelectedChange.emit(this.cursoSelected)
  }
}
