import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Iprofesor } from '../interfaces/Iprofesor';
import { ProfesorService } from '../services/profesor.service';
import { EspecialidadService } from '../services/especialidad.service';
import { Iespecialidad } from '../interfaces/iespecialidad';
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
    id: 0,
    name: '',
    lastname: '',
    phone: '',
    specialism: 0,
    degree: ''
  }
  profesores: Iprofesor[] = []
  especialidades: Iespecialidad[] = []
  teacherId: string = ''

  constructor(private profServ: ProfesorService, private speciServ: EspecialidadService){
    this.teacherId=localStorage.getItem('teacherId') || ''
    profServ.getAll().subscribe(
      response => {
        this.profesores = response
        console.log(this.profesores);
      },
      error => {
        console.log('Errorsito en: ', error);
      }
    )
    speciServ.getAll().subscribe(
      response => {
        this.especialidades = response
        console.log(this.profesores);
      },
      error => {
        console.log('Errorsito en: ', error);
      }
    )
  }
  
  openDelete(): void {
    this.i = this.prof.id
    this.visibleDeleteChange.emit(!this.visibleDelete);
    this.iChange.emit(this.i); // emite el valor actualizado
  }

  openEdit(): void {
    this.i = this.prof.id
    this.visibleChange.emit(!this.visible);
    this.iChange.emit(this.i);
  }
  
}
