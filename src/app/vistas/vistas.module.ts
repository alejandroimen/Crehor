import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HorarioModule } from '../horario/horario.module';
import { ProfesoresModule } from '../profesores/profesores.module';
import { MateriasModule } from '../materias/materias.module';
import { GruposModule } from '../grupos/grupos.module';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { VistaProfesoresComponent } from './vista-profesores/vista-profesores.component';
import { VistaHorariosComponent } from './vista-horarios/vista-horarios.component';
import { VistaMateriasComponent } from './vista-materias/vista-materias.component';
import { VistaAgregarHorarioComponent } from './vista-agregar-horario/vista-agregar-horario.component';
import { VistaArmarHorarioComponent } from './vista-armar-horario/vista-armar-horario.component';

@NgModule({
  declarations: [
    VistaPrincipalComponent,
    VistaProfesoresComponent,
    VistaHorariosComponent,
    VistaMateriasComponent,
    VistaAgregarHorarioComponent,
    VistaArmarHorarioComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
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
 