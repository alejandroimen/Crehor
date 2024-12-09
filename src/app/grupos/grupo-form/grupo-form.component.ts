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
  @Input() grupos: Igrupo[] = []
  @Output() gruposChange = new EventEmitter<Igrupo[]>()
  grupo: Igrupo = {
    id: 0,
    grade: 0,
    group: '',
    hasSchedule: false
  }

  constructor(private grpSrv: GruposService){}

  changeVisibility(): void {
    this.visibleChange.emit(!this.visible)
  }

  addGrupo(){
    if(this.grupo.grade && this.grupo.group){
      this.grpSrv.add(this.grupo).subscribe(
        (respuesta) => {
          console.log('Grupo agregado con éxito:', respuesta);
          this.grupos.push(this.grupo); // Agrega el nuevo grupo al arreglo de grupos
          this.gruposChange.emit(this.grupos)
        },
        (error) => {
          console.error('Error al agregar el grupo:', error);
        }
      );
      this.visibleChange.emit(!this.visible)
    }
    else {
      alert('Completa todos los campos xfi u.u')
    }
  }
}
