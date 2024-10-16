import { Component } from '@angular/core';
import { MateriaService } from '../materia.service';
import { Imateria } from '../imateria';

@Component({
  selector: 'app-selector-materias',
  templateUrl: './selector-materias.component.html',
  styleUrl: './selector-materias.component.css'
})
export class SelectorMateriasComponent {
  materias!: Imateria[]
  ngOnInit(){
    let materiasString = localStorage.getItem("listaMaterias")
    if(materiasString){
      this.materias = JSON.parse(materiasString) as Imateria[]
    }
    console.log(this.materias)
  }
  isOpenFormMateria: boolean = true
}
