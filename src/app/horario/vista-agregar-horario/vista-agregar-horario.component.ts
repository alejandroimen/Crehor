import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Icurso } from '../../materias/interfaces/icurso';
import { Igrupo } from '../../grupos/interfaces/igrupo';
import { Imateria } from '../../materias/interfaces/imateria';
import { Iprofesor } from '../../profesores/interfaces/Iprofesor';
import { ProfesorService } from '../../profesores/services/profesor.service';
import { MateriaService } from '../../materias/materia.service';
import { GruposService } from '../../grupos/services/grupos.service';
@Component({
  selector: 'app-vista-agregar-horario',
  standalone: false,
  templateUrl: './vista-agregar-horario.component.html',
  styleUrl: './vista-agregar-horario.component.css'
})
export class VistaAgregarHorarioComponent {
  unselectedMat:boolean = false
  unselectedProf:boolean = false
  cursos: Icurso[] = []
  grupos: Igrupo[] = []
  materias: Imateria[] = []
  profesores: Iprofesor[] = []
  grupoSelected: Igrupo = {
    id: 0,
    grade: 0,
    group: '',
    hasSchedule: false
  }

  profSelected: Iprofesor={
    id: 0,
    name: '',
    lastname: '',
    phone: '',
    specialism: 0,
    degree: ''
  }
  matselected: Imateria = {
    id: 0,
    name: '',
    credits: 0,
    hours:0,
    grade: 0,
    state: true
  }
  cursoSelected: Icurso = {
    materia: this.matselected,
    profr: this.profSelected,
    grupo: this.grupoSelected
  }
  gruposVisibles:boolean = false

  constructor(private _router: Router, private grpServ: GruposService, private prfServ: ProfesorService, private matServ: MateriaService) {
    prfServ.getAll().subscribe(
      response => {
        this.profesores = response
        console.log(this.profesores);
        
      },
      error => {
        console.log('Errorsito en: ', error);
        
      }
    )
    matServ.getAll().subscribe(
      response => {
        this.materias = response
      },
      error =>{
        console.log('Error al obtener las materias', error);      
      }
    )
    this.grpServ.getAll().subscribe(
      data => {
        this.grupos = data
      },
      (error) => {
        console.error('Error al obtener los grupos:', error);
      }
    );
  }

  addCurso():void {
    let cursoAux:Icurso = this.cursoSelected
    let medida = this.cursos.length
    this.cursos.push(cursoAux)
    console.log(this.cursos);  
    if(this.cursos.length>medida){
      alert('exito')
    }
    this.cursoSelected = {
      materia:{
        id: 0,
        name: '',
        credits: 0,
        hours:0,
        grade: 0,
        state: true
      },
      profr: {
        id: 0,
        name: '',
        lastname: '',
        phone: '',
        specialism: 0,
        degree: ''
      },
      grupo: {
        id: 0,
        grade: 0,
        group: '',
        hasSchedule: false
      }
    }
  }

  goNext(): void {
    if(this.cursos.length>0){
      localStorage.setItem('listaCursosPorAnotar', JSON.stringify(this.cursos))
      this._router.navigate(['/armar-horario'])
    }
    else {
      alert('Tienes que agregar al menos un curso')
    }
  }
} 
