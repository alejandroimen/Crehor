import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Iprofesor } from '../interfaces/Iprofesor';

@Component({
  selector: 'app-profesor-line-selector',
  templateUrl: './profesor-line-selector.component.html',
  styleUrl: './profesor-line-selector.component.css'
})
export class ProfesorLineSelectorComponent {
  @Input() isSelected: boolean = false; 
  @Output() profSelectedChange = new EventEmitter<Iprofesor>()
  @Input() profSelected: Iprofesor={
    codigo: '',
    nombre: '',
    apellido: '',
    telefono: '',
    especialidad: '',
    titulo: ''
  }
  @Input() prof: Iprofesor={
    codigo: '',
    nombre: '',
    apellido: '',
    telefono: '',
    especialidad: '',
    titulo: ''
  }

  seleccionar():void {
    this.profSelected = this.prof
    console.log(this.profSelected);
    this.profSelectedChange.emit(this.profSelected)
  }
}
