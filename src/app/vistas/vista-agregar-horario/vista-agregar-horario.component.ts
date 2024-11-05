import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { Icurso } from '../../materias/interfaces/icurso';
import { Igrupo } from './../../grupos/interfaces/igrupo';
import { Imateria } from '../../materias/interfaces/imateria';
import { Iprofesor } from '../../profesores/interfaces/Iprofesor';
import { ProfesorService } from '../../profesores/services/profesor.service';
import { MateriaService } from '../../materias/materia.service';
import { GruposService } from '../../grupos/services/grupos.service';
@Component({
  selector: 'app-vista-agregar-horario',
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
    grado: 0,
    grp: '',
    horarioAsignado: true
  }
  profSelected: Iprofesor = {
    codigo: '',
    nombre: '',
    apellido: '',
    telefono: '',
    especialidad: '',
    titulo: ''
  }
  matselected: Imateria = {
    codigo: 0,
    nombre: '',
    numCreditos: 0,
    horasPorSemana:0,
    grado: 0,
    estado: true
  }
  gruposVisibles:boolean = false

  constructor(private _router: Router, private grpServ: GruposService, private prfServ: ProfesorService, private matServ: MateriaService) {
    this.profesores = prfServ.getAll()
    this.materias = matServ.getAll()
    this.grupos = grpServ.getAll()
  }

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
