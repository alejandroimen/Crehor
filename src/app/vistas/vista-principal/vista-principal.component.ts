import { Component } from '@angular/core';
import { Horario } from '../../horario/interfaces/horario';
@Component({
  selector: 'app-vista-principal',
  templateUrl: './vista-principal.component.html',
  styleUrl: './vista-principal.component.css'
})
export class VistaPrincipalComponent {
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
