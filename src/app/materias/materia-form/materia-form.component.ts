import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Imateria } from '../imateria';
@Component({
  selector: 'app-materia-form',
  templateUrl: './materia-form.component.html',
  styleUrl: './materia-form.component.css'
})
export class MateriaFormComponent {
  @Input() visible: boolean = false
  materias!: Imateria[]
  @Input() materi : Imateria = {
    codigo: '',
    nombre: '',
    numCreditos: 0,
    horasPorSemana: 0,
    grado: 0,
    estado: true
  }
  @Output() eventEmitter = new EventEmitter<Imateria>()
  @Output() visibleChange = new EventEmitter<boolean>()

  ngOnInit(){
    let materiasString = localStorage.getItem("listaMaterias")
    if(materiasString){
      this.materias = JSON.parse(materiasString) as Imateria[]
    }
  }


  changeVisibility(): void {
    this.visibleChange.emit(!this.visible); 
  }

  addMateria(): void {
    let auxMat : Imateria = {
      codigo: this.materi.codigo,
      nombre: this.materi.nombre,
      numCreditos: this.materi.numCreditos,
      horasPorSemana: this.materi.horasPorSemana,
      grado: this.materi.grado,
      estado: this.materi.estado
    }
    this.materias.push(auxMat)
    localStorage.setItem("listaMaterias", JSON.stringify(this.materias));
    console.log('PUSHEO' + this.materias)
    console.log('LOCALSTORAGE' + localStorage.getItem('listaMaterias'));
  }
}
