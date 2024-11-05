import { Component } from '@angular/core';
import { Igrupo } from '../../grupos/interfaces/igrupo';
import { Iprofesor } from '../../profesores/interfaces/Iprofesor';
import { Imateria } from '../../materias/interfaces/imateria';
import { Horario } from '../../horario/interfaces/horario';

@Component({
  selector: 'app-vista-horarios',
  templateUrl: './vista-horarios.component.html',
  styleUrl: './vista-horarios.component.css'
})
export class VistaHorariosComponent {
  mat: Imateria = {
    codigo: 0,
    nombre: 'Fundamentos de bases de datos',
    numCreditos: 10,
    horasPorSemana: 6,
    grado: 3,
    estado: true
  }
  prof: Iprofesor =  {
    codigo: '',
    nombre: 'Juanito',
    apellido: 'Alcachofa', 
    telefono: '961 123 4567',
    especialidad: 'Sociales',
    titulo: 'Maestria'
  }
  grp: Igrupo = {
    grado: 1,
    grp: 'A',
    horarioAsignado: true
  }

  horarios: Horario[] = [
    {
      dia: 1,
      hora: 1,
      curso: {
        materia: this.mat,
        profr: this.prof,
        grupo: this.grp
      }
    },
    {
      dia: 1,
      hora: 1,
      curso: {
        materia:this.mat,
        profr: this.prof,
        grupo: this.grp
      }
    }
  ]

}
