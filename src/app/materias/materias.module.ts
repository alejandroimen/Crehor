import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectorMateriasComponent } from './selector-materias/selector-materias.component';
import { MateriaCardComponent } from './materia-card/materia-card.component';
import { CardCompleteComponent } from './card-complete/card-complete.component';
import { MateriaFormComponent } from './materia-form/materia-form.component';
import { VistaVisualizarMateriasComponent } from './vista-visualizar-materias/vista-visualizar-materias.component';



@NgModule({
  declarations: [
    SelectorMateriasComponent,
    MateriaCardComponent,
    CardCompleteComponent,
    MateriaFormComponent,
    VistaVisualizarMateriasComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SelectorMateriasComponent,
    MateriaCardComponent,
    CardCompleteComponent,
    MateriaFormComponent,
    VistaVisualizarMateriasComponent
  ]
})
export class MateriasModule {}
