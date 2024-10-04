import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorMateriasComponent } from './selector-materias/selector-materias.component';
import { MateriaCardComponent } from './materia-card/materia-card.component';



@NgModule({
  declarations: [
    SelectorMateriasComponent,
    MateriaCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SelectorMateriasComponent
  ]
})
export class MateriasModule {}
