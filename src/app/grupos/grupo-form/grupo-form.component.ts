import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GruposService } from '../services/grupos.service';
import { Igrupo } from '../interfaces/igrupo';
@Component({
  selector: 'app-grupo-form',
  templateUrl: './grupo-form.component.html',
  styleUrl: './grupo-form.component.css'
})
export class GrupoFormComponent {
  @Input() visible: boolean = false
  @Output() visibleChange = new EventEmitter<boolean>()
  grupo: Igrupo = {
    grado: 0,
    grp: '',
    horarioAsignado: false
  }

  constructor(private grupoService: GruposService){}

  changeVisibility(): void {
    this.visibleChange.emit(!this.visible)
  }

  addGrupo(){
    let grupoAux: Igrupo = {
      grado: this.grupo.grado,
      grp: this.grupo.grp,
      horarioAsignado: this.grupo.horarioAsignado
    }
    if(this.grupo.grado && this.grupo.grp){
      this.grupoService.add(grupoAux)
      console.log(localStorage.getItem('listaGrupos'));
      this.visibleChange.emit(!this.visible)
    }
    else {
      alert('Completa todos los campos xfi u.u')
    }
  }
}
