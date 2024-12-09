import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PantillaDiasHorarioComponent } from './pantilla-dias-horario/pantilla-dias-horario.component';
import { HorarioVisibleComponent } from './horario-visible/horario-visible.component';
import { VistaVisualizarHorarioComponent } from './vista-visualizar-horario/vista-visualizar-horario.component';
import { ProfesoresModule } from '../profesores/profesores.module';
import { MateriasModule } from '../materias/materias.module';
import { GruposModule } from '../grupos/grupos.module';
import { VistaArmarHorarioComponent } from './vista-armar-horario/vista-armar-horario.component';
import { VistaAgregarHorarioComponent } from './vista-agregar-horario/vista-agregar-horario.component';
import { VistaHorariosComponent } from './vista-horarios/vista-horarios.component';

@NgModule({
  declarations: [
    PantillaDiasHorarioComponent,
    HorarioVisibleComponent,
    VistaVisualizarHorarioComponent,
    VistaHorariosComponent,
    VistaAgregarHorarioComponent,
    VistaArmarHorarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProfesoresModule,
    MateriasModule,
    GruposModule
  ],
  exports: [
    PantillaDiasHorarioComponent,
    HorarioVisibleComponent,
    VistaVisualizarHorarioComponent,
    VistaHorariosComponent,
    VistaAgregarHorarioComponent,
    VistaArmarHorarioComponent
  ]
})
export class HorarioModule { }
