import { Component } from '@angular/core';
import { Imateria } from './materias/imateria';
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
      codigo: 'ALG',
      nombre: 'Algebra',
      numCreditos: 10,
      horasPorSemana: 5,
      grado: 1,
      estado: true
    },
    {
      codigo: 'FIS',
      nombre: 'Fisica',
      numCreditos: 10,
      horasPorSemana: 6,
      grado: 3,
      estado: true
    },
    {
      codigo: 'EXO',
      nombre: 'Expresion oral',
      numCreditos: 10,
      horasPorSemana: 3,
      grado: 1,
      estado: true
    },
    {
      codigo: 'QUI',
      nombre: 'Quimica',
      numCreditos: 10,
      horasPorSemana: 4,
      grado: 2,
      estado: true
    },
    {
      codigo: 'CAD',
      nombre: 'Calculo diferencial',
      numCreditos: 10,
      horasPorSemana: 6,
      grado: 3,
      estado: true
    }
  ]
  profesores: Iprofesor[] = [
    {
      nombre: 'Julian',
      apellido: 'Hernandez',
      telefono: '961234567',
      especialidad: 'Física',
      titulo: 'Maestría'
    },
    {
      nombre: 'Araceli',
      apellido: 'Gutierrez',
      telefono: '961234567',
      especialidad: 'Humanidades',
      titulo: 'Maestría'
    },
    {
      nombre: 'Beatriz',
      apellido: 'Pinzon',
      telefono: '961234567',
      especialidad: 'Estadistica',
      titulo: 'Doctorado'
    },
    {
      nombre: 'Armando',
      apellido: 'Mendoza',
      telefono: '961234567',
      especialidad: 'Finanzas',
      titulo: 'Doctorado'
    }
  ]

  ngOnInit(){
    localStorage.setItem("listaMaterias", JSON.stringify(this.materias));
    localStorage.setItem("listaProfesores", JSON.stringify(this.profesores))
  }
}
