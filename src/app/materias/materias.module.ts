import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MateriaCardComponent } from './materia-card/materia-card.component';
import { CardCompleteComponent } from './card-complete/card-complete.component';
import { MateriaFormComponent } from './materia-form/materia-form.component';
import { VistaVisualizarMateriasComponent } from './vista-visualizar-materias/vista-visualizar-materias.component';
import { ConfirmarDeleteMateriaComponent } from './confirmar-delete-materia/confirmar-delete-materia.component';
import { VistaMateriasComponent } from './vista-materias/vista-materias.component';

@NgModule({
  declarations: [
    MateriaCardComponent,
    CardCompleteComponent,
    MateriaFormComponent,
    VistaVisualizarMateriasComponent,
    ConfirmarDeleteMateriaComponent,
    VistaMateriasComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    MateriaCardComponent,
    CardCompleteComponent,
    MateriaFormComponent,
    VistaVisualizarMateriasComponent,
    ConfirmarDeleteMateriaComponent,
    VistaMateriasComponent
  ]
})
export class MateriasModule {}
