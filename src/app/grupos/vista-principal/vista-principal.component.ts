import { Component } from '@angular/core';
import { Horario } from '../../horario/interfaces/horario';
import { Igrupo } from '../interfaces/igrupo';
import { GruposService } from '../services/grupos.service';
@Component({
  selector: 'app-vista-principal',
  standalone: false,
  templateUrl: './vista-principal.component.html',
  styleUrl: './vista-principal.component.css'
})
export class VistaPrincipalComponent {
  formVisible: boolean = false
  grupos: Igrupo[] = []

  constructor(private grpSrv: GruposService){}

  ngOnInit(){
    this.grpSrv.getAll().subscribe(
      data => {
        this.grupos = data
        console.log(this.grupos);
      },
      error => {
        console.error('Error al obtener los grupos:', error);
      }
    );
  }

  changeVisibilityForm(): void {
    this.formVisible = !this.formVisible
  }
}
