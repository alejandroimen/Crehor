import { Component } from '@angular/core';
import { Icurso } from '../../materias/interfaces/icurso';
import { Imateria } from '../../materias/interfaces/imateria';
import { GruposService } from '../../grupos/services/grupos.service';
import { HorarioService } from '../services/horario.service';
import { Horario } from '../interfaces/horario';
@Component({
  selector: 'app-vista-armar-horario',
  standalone: false,
  templateUrl: './vista-armar-horario.component.html',
  styleUrls: ['./vista-armar-horario.component.css']
})
export class VistaArmarHorarioComponent {
  cursSelected: Icurso  = {
    materia: {
      id:0,
      name: '',
      credits: 0,
      hours: 0,
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
      id:0,
      grade: 0,
      group: '',
      hasSchedule: false
    }
  }
  cursos: Icurso[] = []; // Declaración como propiedad de clase
  schedule: Horario[] = []

  constructor(private horServ: HorarioService) {
    const cursosGuardados = localStorage.getItem('listaCursosPorAnotar');
    this.cursos = cursosGuardados ? (JSON.parse(cursosGuardados) as Icurso[]) : [];
  }

  generate():void {
    console.log('Horario:', this.schedule);
    const grp = localStorage.getItem('group') || ''
    this.horServ.addHorario(grp, this.schedule).subscribe(
      response => {
        alert('Exito')
        console.log('Exito', response);
      },
      error => {
        alert('error')
        console.log('Error', error);
      }
    )
  }

  onScheduleUpdate(newSchedule: Horario[]) {
    this.schedule = newSchedule;
  }
}
