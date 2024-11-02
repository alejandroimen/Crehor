import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorarioModule } from '../horario/horario.module';
import { ProfesoresModule } from '../profesores/profesores.module';
import { MateriasModule } from '../materias/materias.module';
import { GruposModule } from '../grupos/grupos.module';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { VistaProfesoresComponent } from './vista-profesores/vista-profesores.component';

@NgModule({
  declarations: [
    VistaPrincipalComponent,
    VistaProfesoresComponent
  ],
  imports: [
    CommonModule,
    HorarioModule,
    ProfesoresModule,
    MateriasModule,
    GruposModule
  ],
  exports: [
    VistaPrincipalComponent,
    VistaProfesoresComponent
  ]
})
export class VistasModule { }
 