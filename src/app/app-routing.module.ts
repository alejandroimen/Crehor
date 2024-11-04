import { VistaPrincipalComponent } from './vistas/vista-principal/vista-principal.component';
import { VistaProfesoresComponent } from './vistas/vista-profesores/vista-profesores.component';
import { VistaHorariosComponent } from './vistas/vista-horarios/vista-horarios.component';
import { VistaMateriasComponent } from './vistas/vista-materias/vista-materias.component';
import { VistaAgregarHorarioComponent } from './vistas/vista-agregar-horario/vista-agregar-horario.component';
import { NgModule } from '@angular/core';
import { VistasModule } from './vistas/vistas.module';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path: '', component: VistaPrincipalComponent},
  {path: 'horarios', component: VistaHorariosComponent},
  {path: 'profs', component: VistaProfesoresComponent},
  {path: 'materias', component: VistaMateriasComponent},
  {path: 'addmat', component: VistaAgregarHorarioComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }