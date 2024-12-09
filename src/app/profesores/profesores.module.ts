import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProfesorLineComponent } from './profesor-line/profesor-line.component';
import { ContainerProfesoresComponent } from './container-profesores/container-profesores.component';
import { FormProfesorComponent } from './form-profesor/form-profesor.component';
import { ProfesorLineSelectorComponent } from './profesor-line-selector/profesor-line-selector.component';
import { VistaVisualizarProfesoresComponent } from './vista-visualizar-profesores/vista-visualizar-profesores.component';
import { ConfirmarDeleteComponent } from './confirmar-delete/confirmar-delete.component';
import { VistaProfesoresComponent } from './vista-profesores/vista-profesores.component';

@NgModule({
  declarations: [
    ProfesorLineComponent,
    ContainerProfesoresComponent,
    FormProfesorComponent,
    ProfesorLineSelectorComponent,
    VistaVisualizarProfesoresComponent,
    ConfirmarDeleteComponent,
    VistaProfesoresComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    HttpClientModule
  ],
  exports: [
    ProfesorLineComponent,
    ContainerProfesoresComponent,
    FormProfesorComponent,
    ProfesorLineSelectorComponent,
    VistaVisualizarProfesoresComponent,
    ConfirmarDeleteComponent
  ]
})
export class ProfesoresModule { }
