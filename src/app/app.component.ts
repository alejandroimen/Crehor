import { Component } from '@angular/core';
import { Imateria } from './materias/interfaces/imateria';
import { Iprofesor } from './profesores/interfaces/Iprofesor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App-web';
  materias: Imateria[] = [
    {
      codigo: 0,
      nombre: 'Algebra',
      numCreditos: 10,
      horasPorSemana: 5,
      grado: 1,
      estado: true
    },
    {
      codigo: 1,
      nombre: 'Fisica',
      numCreditos: 10,
      horasPorSemana: 6,
      grado: 3,
      estado: true
    },
    {
      codigo: 2,
      nombre: 'Expresion oral',
      numCreditos: 10,
      horasPorSemana: 3,
      grado: 1,
      estado: true
    },
    {
      codigo: 3,
      nombre: 'Quimica',
      numCreditos: 10,
      horasPorSemana: 4,
      grado: 2,
      estado: true
    },
    {
      codigo: 4,
      nombre: 'Calculo diferencial',
      numCreditos: 10,
      horasPorSemana: 6,
      grado: 3,
      estado: true
    }
  ]
  profesores: Iprofesor[] = [
    {
      codigo: '',
      nombre: 'Julian',
      apellido: 'Hernandez',
      telefono: '961234567',
      especialidad: 'Física',
      titulo: 'Maestría'
    },
    {
      codigo: '',
      nombre: 'Araceli',
      apellido: 'Gutierrez',
      telefono: '961234567',
      especialidad: 'Humanidades',
      titulo: 'Maestría'
    },
    {
      codigo: '',
      nombre: 'Beatriz',
      apellido: 'Pinzon',
      telefono: '961234567',
      especialidad: 'Estadistica',
      titulo: 'Doctorado'
    },
    {
      codigo: '',
      nombre: 'Armando',
      apellido: 'Mendoza',
      telefono: '961234567',
      especialidad: 'Finanzas',
      titulo: 'Doctorado'
    }
  ]
  especialidades: string[] = [
    'Fisica',
    'Quimica',
    'Sociales',
    'Lengua'
  ]

  ngOnInit(){
    if(!localStorage.getItem('listaMaterias')){
      localStorage.setItem("listaMaterias", JSON.stringify(this.materias));
    }
    if(!localStorage.getItem('listaProfesores')){
      localStorage.setItem("listaProfesores", JSON.stringify(this.profesores))
    }
    if(!localStorage.getItem('listaEspecialidades')){
      localStorage.setItem("listaEspecialidades", JSON.stringify(this.especialidades))
    }
  }
}
