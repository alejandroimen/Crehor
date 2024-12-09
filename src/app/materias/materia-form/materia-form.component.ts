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
  @Output() iChange = new EventEmitter<number>()
  @Input() visible: boolean = true
  @Output() visibleChange = new EventEmitter<boolean>()
  @Input() materi : Imateria = {
    id: 0,
    name: '',
    credits: 0,
    hours: 0,
    grade: 0,
    state: true
  }
  @Input() materias: Imateria[] = []
  @Output() materiasChange = new EventEmitter<Imateria>()
  
  @Input() update: boolean = true
  @Output() updateChange = new EventEmitter<boolean>()

  constructor(private matServ: MateriaService){ }


  changeVisibility(): void {
    this.visibleChange.emit(!this.visible); 
  }

  clickButton(): number {
    console.log('Indice ' ,this.i);
    
    let auxMat : Imateria = {
      id: 0,
      name: this.materi.name,
      credits: this.materi.credits,
      hours: this.materi.hours,
      grade: this.materi.grade,
      state: this.materi.state
    }
    if(!(auxMat.name && auxMat.grade && auxMat.credits && auxMat.hours && auxMat.state)){
      alert("Completa los campos plis uwu")
      return 0
    }
    if(this.i<0){
      this.matServ.add(auxMat).subscribe(
        response => {
          alert('Add todo bien :D ')
          console.log(response);          
        },
        error =>{
          alert('algo add salio mal')
          console.log(error);
        }
      )
    }
    else{
      this.matServ.edit(this.i, auxMat).subscribe(
        response => {
          alert('Edit todo bien :D ')
          console.log(response);          
        },
        error =>{
          alert('algo edit salio mal')
          console.log(error);
        }
      )
    }
    this.iChange.emit(-1)
    this.updateChange.emit(true)
    this.visibleChange.emit(!this.visible)
    return 0
  }
}
