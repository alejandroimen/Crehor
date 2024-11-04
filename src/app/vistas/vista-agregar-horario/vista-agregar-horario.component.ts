import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Icurso } from '../../materias/interfaces/icurso';
import { Igrupo } from './../../grupos/interfaces/igrupo';
import { Imateria } from '../../materias/interfaces/imateria';
import { Iprofesor } from '../../profesores/interfaces/Iprofesor';

@Component({
  selector: 'app-vista-agregar-horario',
  templateUrl: './vista-agregar-horario.component.html',
  styleUrl: './vista-agregar-horario.component.css'
})
export class VistaAgregarHorarioComponent {
  unselectedMat:boolean = false
  unselectedProf:boolean = false
  cursos: Icurso[] = []
  grupoSelected: Igrupo = {
    grado: 0,
    grp: '',
    horarioAsignado: true
  }
  profSelected: Iprofesor = {
    nombre: '',
    apellido: '',
    telefono: '',
    especialidad: '',
    titulo: ''
  }
  matselected: Imateria = {
    codigo: '',
    nombre: '',
    numCreditos: 0,
    horasPorSemana:0,
    grado: 0,
    estado: true
  }
  gruposVisibles:boolean = false
  profesores: Iprofesor[] = [
    {
      nombre: 'Armando',
      apellido: 'Mendoza', 
      telefono: '961 123 4567',
      especialidad: 'Electronica',
      titulo: 'Maestria'
    },
    {
      nombre: 'Beatriz',
      apellido: 'Pinzon', 
      telefono: '961 321 4567',
      especialidad: 'Biologia',
      titulo: 'Maestria'
    },
    {
      nombre: 'Juanito',
      apellido: 'Alcachofa', 
      telefono: '961 123 4567',
      especialidad: 'Sociales',
      titulo: 'Maestria'
    }
  ]
  grupos: Igrupo[] = [
    {
      grado: 1,
      grp: 'A',
      horarioAsignado: true
    },
    {
      grado: 2,
      grp: 'A',
      horarioAsignado: true
    },
    {
      grado: 2,
      grp: 'B',
      horarioAsignado: false
    }
  ] 
  materias: Imateria[] = [
    {
      codigo: 'FBD',
      nombre: 'Fundamentos de bases de datos',
      numCreditos: 10,
      horasPorSemana: 6,
      grado: 3,
      estado: false
    },
    {
      codigo: 'PRV',
      nombre: 'Programación Visual',
      numCreditos: 10,
      horasPorSemana: 7,
      grado: 3,
      estado: false
    },
    {
      codigo: 'ALG',
      nombre: 'Algoritmos',
      numCreditos: 10,
      horasPorSemana: 8,
      grado: 1,
      estado: false
    },
    {
      codigo: 'EDA',
      nombre: 'Estructuras de datos avanzadas',
      numCreditos: 10,
      horasPorSemana: 4,
      grado: 3,
      estado: false
    }
  ]

  constructor(private _router: Router) {}

  addCurso():void {
    let cursoAux:Icurso = {
      materia: this.matselected,
      grupo: this.grupoSelected,
      profr: this.profSelected
    }
    let medida = this.cursos.length
    this.cursos.push(cursoAux)
    console.log(this.cursos);  
    if(this.cursos.length>medida){
      alert('exit o')
    }
  }

  goNext(): void {
    if(this.cursos.length>0){
      localStorage.setItem('listaCursosPorAnotar', JSON.stringify(this.cursos))
      this._router.navigate(['/armarhor'])
    }
    else {
      alert('Tienes que agregar al menos un curso')
    }
  }
} 
