import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PantillaDiasHorarioComponent } from './pantilla-dias-horario/pantilla-dias-horario.component';
import { HorarioVisibleComponent } from './horario-visible/horario-visible.component';
import { VistaHacerHorarioComponent } from './vista-hacer-horario/vista-hacer-horario.component';
import { VistaVisualizarHorarioComponent } from './vista-visualizar-horario/vista-visualizar-horario.component';

@NgModule({
  declarations: [
    PantillaDiasHorarioComponent,
    HorarioVisibleComponent,
    VistaHacerHorarioComponent,
    VistaVisualizarHorarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    PantillaDiasHorarioComponent,
    HorarioVisibleComponent,
    VistaHacerHorarioComponent,
    VistaVisualizarHorarioComponent
  ]
})
export class HorarioModule { }
