import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Imateria } from '../interfaces/imateria';
import { MateriaService } from '../materia.service';
@Component({
  selector: 'app-materia-form',
  templateUrl: './materia-form.component.html',
  styleUrl: './materia-form.component.css'
})
export class MateriaFormComponent {
  @Input() i:number = -1
  @Input() visible: boolean = true
  @Output() visibleChange = new EventEmitter<boolean>()
  materias!: Imateria[]
  @Input() materi : Imateria = {
    codigo: 0,
    nombre: '',
    numCreditos: 0,
    horasPorSemana: 0,
    grado: 0,
    estado: true
  }
  @Output() eventEmitter = new EventEmitter<Imateria>()

  constructor(private matServ: MateriaService){
    this.materias = matServ.getAll()
  }


  changeVisibility(): void {
    this.visibleChange.emit(!this.visible); 
  }

  addMateria(): void {
    let auxMat : Imateria = {
      codigo: this.materias.length-1,
      nombre: this.materi.nombre,
      numCreditos: this.materi.numCreditos,
      horasPorSemana: this.materi.horasPorSemana,
      grado: this.materi.grado,
      estado: this.materi.estado
    }
    this.matServ.add
    localStorage.setItem("listaMaterias", JSON.stringify(this.materias));
    console.log('PUSHEO' + this.materias)
    console.log('LOCALSTORAGE' + localStorage.getItem('listaMaterias'));
  }
}
