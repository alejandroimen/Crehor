import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Iprofesor } from '../interfaces/Iprofesor';
import { ProfesorService } from '../services/profesor.service';
@Component({
  selector: 'app-profesor-line',
  templateUrl: './profesor-line.component.html',
  styleUrl: './profesor-line.component.css'
})
export class ProfesorLineComponent {
  @Input() visibleDelete:boolean = false
  @Output() visibleDeleteChange = new EventEmitter<boolean>()
  @Output() visibleChange = new EventEmitter<boolean>()
  @Input() visible:boolean = false
  @Input() i:number = -1
  @Output() iChange = new EventEmitter<number>()
  @Input() prof: Iprofesor={
    codigo: '',
    nombre: '',
    apellido: '',
    telefono: '',
    especialidad: '',
    titulo: ''
  }

  constructor(private profServ: ProfesorService) {}
  
  openDelete(): void {
    this.i = this.profServ.getAll().findIndex(profr=> profr.codigo === this.prof.codigo)
    this.visibleDeleteChange.emit(!this.visibleDelete);
    this.iChange.emit(this.i); // emite el valor actualizado
  }

  openEdit(): void {
    this.i = this.profServ.getAll().findIndex(profr=> profr.codigo === this.prof.codigo)
    this.visibleChange.emit(!this.visible);
    this.iChange.emit(this.i);
  }
  
}
