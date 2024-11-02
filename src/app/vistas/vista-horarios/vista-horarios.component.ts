import { Component } from '@angular/core';
import { Horario } from '../../horario/interfaces/horario';

@Component({
  selector: 'app-vista-horarios',
  templateUrl: './vista-horarios.component.html',
  styleUrl: './vista-horarios.component.css'
})
export class VistaHorariosComponent {
  horarios: Horario[] = [
    {
      dia: 1,
      hora: 1,
      materiaId: 1,
      profrId:1,
      grupoId: 1
    },
    {
      dia: 1,
      hora: 1,
      materiaId: 1,
      profrId:1,
      grupoId: 1
    }
  ]

}
