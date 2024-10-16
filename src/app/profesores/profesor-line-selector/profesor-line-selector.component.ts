import { Component, Input } from '@angular/core';
import { Iprofesor } from '../interfaces/Iprofesor';

@Component({
  selector: 'app-profesor-line-selector',
  templateUrl: './profesor-line-selector.component.html',
  styleUrl: './profesor-line-selector.component.css'
})
export class ProfesorLineSelectorComponent {
  @Input() prof: Iprofesor={
    nombre: '',
    apellido: '',
    telefono: '',
    especialidad: '',
    titulo: ''
  }
}
