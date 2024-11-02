import { Iprofesor } from './../interfaces/Iprofesor';
import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-form-profesor',
  templateUrl: './form-profesor.component.html',
  styleUrl: './form-profesor.component.css'
})
export class FormProfesorComponent  {
  @Input() isOpen: boolean = true
  profesores!: Iprofesor[]
  especialidades!: string[]
  @Input() prof : Iprofesor = {
    nombre: '',
    apellido: '', 
    telefono: '',
    especialidad: '',
    titulo: ''
  }

  ngOnInit(){
    let profString = localStorage.getItem("listaMaterias")
    if(profString){
      this.profesores = JSON.parse(profString) as Iprofesor[]
    }
    let especialidadString = localStorage.getItem("listaEspecialidades")
    if(especialidadString){
      this.especialidades = JSON.parse(especialidadString) 
    }
  }

  addMateria(): void {
    let auxProf : Iprofesor = {
      nombre: this.prof.nombre,
      apellido: this.prof.apellido, 
      telefono: this.prof.telefono,
      especialidad: this.prof.especialidad,
      titulo: this.prof.titulo
    }
    this.profesores.push(auxProf)
    localStorage.setItem("listaMaterias", JSON.stringify(this.profesores));
    console.log('PUSHEO' + this.profesores)
    console.log('LOCALSTORAGE' + localStorage.getItem('listaMaterias'));
  }
}