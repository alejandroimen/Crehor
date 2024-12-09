import { Component } from '@angular/core';
import { Igrupo } from '../../grupos/interfaces/igrupo';
import { Iprofesor } from '../../profesores/interfaces/Iprofesor';
import { Imateria } from '../../materias/interfaces/imateria';
import { Horario } from '../interfaces/horario';
import { Router } from '@angular/router';
import { GruposService } from '../../grupos/services/grupos.service';

@Component({
  selector: 'app-vista-horarios',
  standalone: false,
  templateUrl: './vista-horarios.component.html',
  styleUrl: './vista-horarios.component.css'
})
export class VistaHorariosComponent {
  mat: Imateria = {
    id: 0,
    name: 'Fundamentos de bases de datos',
    credits: 10,
    hours: 6,
    grade: 3,
    state: true
  }
  prof: Iprofesor={
    id: 0,
    name: '',
    lastname: '',
    phone: '',
    specialism: 0,
    degree: ''
  }
  grp: Igrupo = {
    id: 0,
    grade: 1,
    group: 'A',
    hasSchedule: false
  }
  grupos: Igrupo[] = []


  constructor(private router: Router, private grpServ: GruposService) {
    this.grpServ.getAll().subscribe(
      data => {
        this.grupos = data
        console.log(this.grupos);
      },
      error => {
        console.error('Error al obtener los grupos:', error);
      }
    );
  }

  goToPage(grupo: Igrupo): void {
    if(!grupo.hasSchedule){
      localStorage.setItem('group', grupo.id.toString())
      this.router.navigate(['/addmat'])
    }else {
      this.router.navigate(['/horario', grupo.id])
    }
  }
}
