import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Imateria } from '../../materias/interfaces/imateria';
import { Horario } from '../interfaces/horario';
import { Icurso } from '../../materias/interfaces/icurso';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-pantilla-dias-horario',
  templateUrl: './pantilla-dias-horario.component.html',
  styleUrl: './pantilla-dias-horario.component.css'
})
export class PantillaDiasHorarioComponent {
  horarios: Horario[] = []
  dias: string[] = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes"
  ]
  @Input() cursoCandidato: Icurso = {
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
      id: 0,
      grade: 0,
      group: '',
      hasSchedule: false
    }
  }
  @Input() selectedCard: any = null;
  @Input() schedule: any[][] = [
    new Array(5),
    new Array(5),
    new Array(5),
    new Array(5),
    new Array(5),
    new Array(5),
    new Array(5),
    new Array(5),
    new Array(5),
    new Array(5)
  ];
  @Output() updateSchedule = new EventEmitter<Horario[]>();

  days = Array(5).fill(null); // 5 días

  onCellClick(hour: number, day: number) {
    if (this.schedule[hour][day]?.locked) return;
  
    if (!this.cursoCandidato?.materia?.name) {
      console.warn('No hay materia seleccionada.');
      return;
    }
  
    this.schedule[hour][day] = {
      name: this.cursoCandidato.materia.name,
      hour: hour + 1,
      day: day + 1,
      subjectId: this.cursoCandidato.materia.id,
      teacherId: this.cursoCandidato.profr.id,
      locked: true // Marcar como bloqueado
    };
    this.horarios.push({
      day: day + 1,
      hour: hour + 1,
      teacherId: this.cursoCandidato.profr.id,
      subjectId: this.cursoCandidato.materia.id
    })
    console.log('horariodentro', this.schedule);
    
    this.updateSchedule.emit(this.horarios);
  }
  

}