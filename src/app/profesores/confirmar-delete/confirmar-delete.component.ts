import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProfesorService } from '../services/profesor.service';

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

  constructor(private profServ: ProfesorService) {}

  cancel():void {
    this.visibleChange.emit(!this.visible)
    this.iChange.emit(-1)
  }

  confirmDelete(): void {
    
    this.profServ.delete(this.i)
    console.log('LOCALSTORAGE' + (localStorage.getItem('listaProfesores') ? localStorage.getItem('listaProfesores'):'nada') )
    this.visibleChange.emit(!this.visible);
    this.iChange.emit(-1)
  }
} 
