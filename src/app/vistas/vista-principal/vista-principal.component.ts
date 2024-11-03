import { Component } from '@angular/core';
import { Horario } from '../../horario/interfaces/horario';
import { Igrupo } from '../../grupos/interfaces/igrupo';
@Component({
  selector: 'app-vista-principal',
  templateUrl: './vista-principal.component.html',
  styleUrl: './vista-principal.component.css'
})
export class VistaPrincipalComponent {
  formVisible: boolean = false
  grupos: Igrupo[] = [
    {
      grado: 1,
      grp: 'A',
      horarioAsignado: true
    },
    {
      grado: 2,
      grp: 'A',
      horarioAsignado: true
    },
    {
      grado: 2,
      grp: 'B',
      horarioAsignado: false
    }
  ] 

  changeVisibilityForm(): void {
    this.formVisible = !this.formVisible
  }
}
