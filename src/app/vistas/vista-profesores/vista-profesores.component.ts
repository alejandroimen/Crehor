import { Component } from '@angular/core';
import { Iprofesor } from '../../profesores/interfaces/Iprofesor';
@Component({
  selector: 'app-vista-profesores',
  templateUrl: './vista-profesores.component.html',
  styleUrl: './vista-profesores.component.css'
})
export class VistaProfesoresComponent {
  profesores: Iprofesor[] = [
    {
      nombre: 'Armando',
      apellido: 'Mendoza', 
      telefono: '961 123 4567',
      especialidad: 'Electronica',
      titulo: 'Maestria'
    },
    {
      nombre: 'Beatriz',
      apellido: 'Pinzon', 
      telefono: '961 321 4567',
      especialidad: 'Biologia',
      titulo: 'Maestria'
    },
    {
      nombre: 'Juanito',
      apellido: 'Alcachofa', 
      telefono: '961 123 4567',
      especialidad: 'Sociales',
      titulo: 'Maestria'
    }
  ]
}
