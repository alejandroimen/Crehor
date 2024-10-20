import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PantillaDiasHorarioComponent } from './pantilla-dias-horario/pantilla-dias-horario.component';
import { HorarioVisibleComponent } from './horario-visible/horario-visible.component';
import { VistaHorarioComponent } from './vista-horario/vista-horario.component';
import { VistaHacerHorarioComponent } from './vista-hacer-horario/vista-hacer-horario.component';
import { VistaVisualizarHorarioComponent } from './vista-visualizar-horario/vista-visualizar-horario.component';



@NgModule({
  declarations: [
    PantillaDiasHorarioComponent,
    HorarioVisibleComponent,
    VistaHorarioComponent,
    VistaHacerHorarioComponent,
    VistaVisualizarHorarioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VistaHorarioComponent
  ]
})
export class HorarioModule { }
