import { ConfirmarDeleteComponent } from './../../profesores/confirmar-delete/confirmar-delete.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MateriaService } from '../materia.service';
import { Iprofesor } from '../../profesores/interfaces/Iprofesor';
import { Imateria } from '../interfaces/imateria';

@Component({
  selector: 'app-confirmar-delete-materia',
  templateUrl: './confirmar-delete-materia.component.html',
  styleUrl: './confirmar-delete-materia.component.css'
})

export class ConfirmarDeleteMateriaComponent {
  @Input() visible: boolean = true
  @Output() visibleChange = new EventEmitter<boolean>()
  @Input() i:number = -1
  @Output() iChange = new EventEmitter<number>()
  @Input() update: boolean = true
  @Output() updateChange = new EventEmitter<boolean>()

  constructor(private matServ: MateriaService) {}

  cancel():void {
    this.visibleChange.emit(!this.visible)
    this.iChange.emit(-1)
  }

  confirmDelete(): void {
    this.matServ.delete(this.i).subscribe(
      response => {
        alert('Exito wiiii')
        console.log(response);
      },
      error => {
        alert('algo salió mal')
        console.log('mal', error);
        
      }
    )
    this.updateChange.emit(true)
    this.iChange.emit(-1)
    this.visibleChange.emit(!this.visible)
  }
} 