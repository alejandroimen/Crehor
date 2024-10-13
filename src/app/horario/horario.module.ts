import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PantillaDiasHorarioComponent } from './pantilla-dias-horario/pantilla-dias-horario.component';
import { HorarioVisibleComponent } from './horario-visible/horario-visible.component';
import { BotonGenerarHorarioComponent } from './boton-generar-horario/boton-generar-horario.component';
import { VistaHorarioComponent } from './vista-horario/vista-horario.component';



@NgModule({
  declarations: [
    PantillaDiasHorarioComponent,
    HorarioVisibleComponent,
    BotonGenerarHorarioComponent,
    VistaHorarioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VistaHorarioComponent
  ]
})
export class HorarioModule { }
