import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProfesorService } from '../services/profesor.service';
import { Iprofesor } from '../interfaces/Iprofesor';

@Component({
  selector: 'app-confirmar-delete',
  templateUrl: './confirmar-delete.component.html',
  styleUrl: './confirmar-delete.component.css'
})
export class ConfirmarDeleteComponent {
  @Input() visible: boolean = true
  @Output() visibleChange = new EventEmitter<boolean>()
  @Input() i:number = -1
  @Output() iChange = new EventEmitter<number>()
  @Input() profesores: Iprofesor[] = []
  @Output() profesoresChange = new EventEmitter<Iprofesor[]>

  constructor(private profServ: ProfesorService) {}

  cancel():void {
    this.visibleChange.emit(!this.visible)
    this.iChange.emit(-1)
  }

  confirmDelete(): void {
    
    this.profServ.delete(this.i).subscribe(
      response => {
        console.log('usuario eliminado con exito', response);
      },
      error => {
        console.log(this.i);
        console.log('Error al eliminar', error);
      }
    )
    this.visibleChange.emit(!this.visible);
    this.iChange.emit(-1)
  }
} 
