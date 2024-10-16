import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfesorLineComponent } from './profesor-line/profesor-line.component';
import { ContainerProfesoresComponent } from './container-profesores/container-profesores.component';
import { BotonAgregarProfesorComponent } from './boton-agregar-profesor/boton-agregar-profesor.component';
import { FormProfesorComponent } from './form-profesor/form-profesor.component';
import { ProfesorLineSelectorComponent } from './profesor-line-selector/profesor-line-selector.component';
import { VistaVisualizarProfesoresComponent } from './vista-visualizar-profesores/vista-visualizar-profesores.component';



@NgModule({
  declarations: [
    ProfesorLineComponent,
    ContainerProfesoresComponent,
    BotonAgregarProfesorComponent,
    FormProfesorComponent,
    ProfesorLineSelectorComponent,
    VistaVisualizarProfesoresComponent
  ],
  imports: [
    CommonModule, 
    FormsModule
  ],
  exports: [
    ProfesorLineComponent,
    ContainerProfesoresComponent
  ]
})
export class ProfesoresModule { }
