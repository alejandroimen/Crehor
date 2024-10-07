import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProfesorLineComponent } from './profesor-line/profesor-line.component';
import { ContainerProfesoresComponent } from './container-profesores/container-profesores.component';



@NgModule({
  declarations: [
    ProfesorLineComponent,
    ContainerProfesoresComponent
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
