import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorarioModule } from '../horario/horario.module';
import { ProfesoresModule } from '../profesores/profesores.module';
import { MateriasModule } from '../materias/materias.module';
import { GruposModule } from '../grupos/grupos.module';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';
import { HeaderComponent } from '../standalone/header/header.component';

@NgModule({
  declarations: [
    VistaPrincipalComponent
  ],
  imports: [
    CommonModule,
    HorarioModule,
    ProfesoresModule,
    MateriasModule,
    GruposModule,
    HeaderComponent
  ]
})
export class VistasModule { }
