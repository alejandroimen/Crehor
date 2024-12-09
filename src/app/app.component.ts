import { Component } from '@angular/core';
import { Imateria } from './materias/interfaces/imateria';
import { Iprofesor } from './profesores/interfaces/Iprofesor';
import { GruposService } from './grupos/services/grupos.service';
import { MateriaService } from './materias/materia.service';
import { ProfesorService } from './profesores/services/profesor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App-web';
  materias: Imateria[] = [
    {
      id: 0,
      name: 'Fundamentos de bases de datos',
      credits: 10,
      hours: 6,
      grade: 3,
      state: true
    },
    {
      id: 0,
      name: 'Programación Visual',
      credits: 10,
      hours: 7,
      grade: 3,
      state: true
    },
    {
      id: 0,
      name: 'Algoritmos',
      credits: 10,
      hours: 8,
      grade: 1,
      state: true
    },
    {
      id: 0,
      name: 'Estructuras de datos avanzadas',
      credits: 10,
      hours: 4,
      grade: 3,
      state: true
    },
    {
      id: 0,
      name: 'Algebra',
      credits: 10,
      hours: 5,
      grade: 1,
      state: true
    },
    {
      id: 0,
      name: 'Fisica',
      credits: 10,
      hours: 6,
      grade: 3,
      state: true
    },
    {
      id: 0,
      name: 'Expresion oral',
      credits: 10,
      hours: 3,
      grade: 1,
      state: true
    },
    {
      id: 0,
      name: 'Quimica',
      credits: 10,
      hours: 4,
      grade: 2,
      state: true
    },
    {
      id: 0,
      name: 'Calculo diferencial',
      credits: 10,
      hours: 6,
      grade: 3,
      state: true
    }
  ]
  especialidades: string[] = [
    'Fisica',
    'Quimica',
    'Sociales',
    'Lengua'
  ]

  constructor(private grpServ: GruposService, private prfServ: ProfesorService, private matServ: MateriaService){
    this.materias.forEach(mat => {
      matServ.add(mat)
    });
  }
}
