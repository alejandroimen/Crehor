import { Iprofesor } from './../interfaces/Iprofesor';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProfesorService } from '../services/profesor.service';
@Component({
  selector: 'app-form-profesor',
  templateUrl: './form-profesor.component.html',
  styleUrl: './form-profesor.component.css'
})
export class FormProfesorComponent  {
  @Input() i:number = -1
  @Output() iChange = new EventEmitter<number>()
  @Input() visible: boolean = true
  @Output() visibleChange = new EventEmitter<boolean>()
  profesores!: Iprofesor[]
  especialidades!: string[]
  @Input() prof : Iprofesor = {
    codigo: '',
    nombre: '',
    apellido: '', 
    telefono: '',
    especialidad: '',
    titulo: ''
  }

  constructor(private profServ: ProfesorService) {
    let especialidadString = localStorage.getItem("listaEspecialidades")
    if(especialidadString){
      this.especialidades = JSON.parse(especialidadString) 
    }
    this.profesores=profServ.getAll()
    
  }
  
  changeVisibility(): void {
    this.visibleChange.emit(!this.visible);
  }

  clickButton(): number {
    console.log('Indice ' ,this.i);
    
    let auxProf : Iprofesor = {
      codigo: '',
      nombre: this.prof.nombre,
      apellido: this.prof.apellido, 
      telefono: this.prof.telefono,
      especialidad: this.prof.especialidad,
      titulo: this.prof.titulo
    }
    if(!(auxProf.nombre && auxProf.apellido && auxProf.telefono && auxProf.especialidad && auxProf.titulo)){
      alert("Completa los campos plis uwu")
      return 0
    }
    if(this.i<0){
      this.profServ.add(auxProf)
      localStorage.setItem("listaMaterias", JSON.stringify(this.profesores));
      console.log('PUSHEO' + this.profesores)
      console.log('LOCALSTORAGE' + (localStorage.getItem('listaProfesores') ? localStorage.getItem('listaProfesores'):'nada') );
      this.visibleChange.emit(!this.visible);
    }
    else{
      this.profServ.edit(this.i, auxProf)
      console.log('Actualizacion' + this.profesores)
      console.log('LOCALSTORAGE' + (localStorage.getItem('listaProfesores') ? localStorage.getItem('listaProfesores'):'nada') );
      this.visibleChange.emit(!this.visible);
    }
    this.iChange.emit(-1);
    return 0
  }
}