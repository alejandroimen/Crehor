import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectorMateriasComponent } from './selector-materias/selector-materias.component';
import { MateriaCardComponent } from './materia-card/materia-card.component';
import { CardCompleteComponent } from './card-complete/card-complete.component';
import { MateriaFormComponent } from './materia-form/materia-form.component';
import { BotonAgregarMateriaComponent } from './boton-agregar-materia/boton-agregar-materia.component';



@NgModule({
  declarations: [
    SelectorMateriasComponent,
    MateriaCardComponent,
    CardCompleteComponent,
    MateriaFormComponent,
    BotonAgregarMateriaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SelectorMateriasComponent
  ]
})
export class MateriasModule {}
