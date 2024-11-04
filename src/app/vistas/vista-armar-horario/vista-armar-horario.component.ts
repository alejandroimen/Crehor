import { Component } from '@angular/core';
import { Icurso } from '../../materias/interfaces/icurso';
import { Imateria } from '../../materias/interfaces/imateria';

@Component({
  selector: 'app-vista-armar-horario',
  templateUrl: './vista-armar-horario.component.html',
  styleUrls: ['./vista-armar-horario.component.css']
})
export class VistaArmarHorarioComponent {
  matselected: Imateria = {
    codigo: '',
    nombre: '',
    numCreditos: 0,
    horasPorSemana: 0,
    grado: 0,
    estado: true
  }
  cursos: Icurso[] = []; // Declaración como propiedad de clase

  constructor() {
    const cursosGuardados = localStorage.getItem('listaCursosPorAnotar');
    this.cursos = cursosGuardados ? (JSON.parse(cursosGuardados) as Icurso[]) : [];
  }

  generate():void {
    
  }
}
