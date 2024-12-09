import { Iprofesor } from './../interfaces/Iprofesor';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProfesorService } from '../services/profesor.service';
import { Iespecialidad } from '../interfaces/iespecialidad';
import { EspecialidadService } from '../services/especialidad.service';
@Component({
  selector: 'app-form-profesor',
  templateUrl: './form-profesor.component.html',
  styleUrl: './form-profesor.component.css'
})
export class FormProfesorComponent  {
  @Input() i:number = -1
  @Output() iChange = new EventEmitter<number>()
  @Input() visible: boolean = true
  @Output() visibleChange = new EventEmitter<boolean>
  especialidades!: Iespecialidad[]
  @Input() profesores: Iprofesor[] = []
  @Output() profesoresChange = new EventEmitter<Iprofesor[]>
  password: string = ''
  @Input() prof : Iprofesor = {
    id: 0,
    name: '',
    lastname: '',
    phone: '',
    specialism: 0,
    degree: ''
  }

  constructor(private profServ: ProfesorService, espServ: EspecialidadService) {
    profServ.getAll().subscribe(
      response => {
        this.profesores = response
      },
      error => {
        console.log('Errorsito en form',error);
      }
    )
    espServ.getAll().subscribe(
      response => {
        this.especialidades = response
      },
      error => {
        console.log('errorsito en epsecialidades', error);
      }
    )
  }
  
  changeVisibility(): void {
    this.visibleChange.emit(!this.visible);
  }

  clickButton(): number {
    console.log('Indice ' ,this.i);
    let auxProf : Iprofesor = {
      id: this.prof.id,
      name: this.prof.name,
      lastname: this.prof.lastname,
      phone: this.prof.phone,
      specialism: this.prof.specialism,
      degree: this.prof.degree
    }
    if(!(this.password && auxProf.name && auxProf.lastname && auxProf.phone && auxProf.specialism && auxProf.degree)){
      alert("Completa los campos plis uwu")
      return 0
    }
    if(this.i<0){
      this.profServ.add(auxProf, this.password).subscribe(
        (respuesta) => {
          console.log('Profesor agregado con éxito:', respuesta);
          console.log('Antes:', this.profesores);
          
          this.profesores = [...this.profesores, respuesta]
          console.log('Despues: ',this.profesores);
          this.profesoresChange.emit(this.profesores);
        },
        (error) => {
          console.error('Error al agregar el grupo:', error);
        }
      )
      this.visibleChange.emit(!this.visible);
    }
    else{
      console.log(auxProf);
      
      this.profServ.edit(this.i, auxProf).subscribe(
        response => {
          console.log('Usuario actualizado correctamente', response);
          this.profesores[this.i]= response
          this.profesoresChange.emit(this.profesores);
        },
        error => {
          console.log('Errorsito al editar en ', this.i);
          console.log(error);    
        }
      )
      this.visibleChange.emit(!this.visible);
    }
    this.iChange.emit(-1);
    return 0
  }
}