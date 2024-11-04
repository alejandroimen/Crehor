import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PantillaDiasHorarioComponent } from './pantilla-dias-horario/pantilla-dias-horario.component';
import { HorarioVisibleComponent } from './horario-visible/horario-visible.component';
import { VistaVisualizarHorarioComponent } from './vista-visualizar-horario/vista-visualizar-horario.component';

@NgModule({
  declarations: [
    PantillaDiasHorarioComponent,
    HorarioVisibleComponent,
    VistaVisualizarHorarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PantillaDiasHorarioComponent,
    HorarioVisibleComponent,
    VistaVisualizarHorarioComponent
  ]
})
export class HorarioModule { }
