import { VistaPrincipalComponent } from './grupos/vista-principal/vista-principal.component';
import { VistaProfesoresComponent } from './profesores/vista-profesores/vista-profesores.component';
import { VistaHorariosComponent } from './horario/vista-horarios/vista-horarios.component';
import { VistaMateriasComponent } from './materias/vista-materias/vista-materias.component';
import { VistaArmarHorarioComponent } from './horario/vista-armar-horario/vista-armar-horario.component';
import { VistaAgregarHorarioComponent } from './horario/vista-agregar-horario/vista-agregar-horario.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './users/login-form/login-form.component';

const routes:Routes = [
  {path: '', component: VistaPrincipalComponent},
  {path: 'horarios', component: VistaHorariosComponent},
  {path: 'profs', component: VistaProfesoresComponent},
  {path: 'materias', component: VistaMateriasComponent},
  {path: 'addmat', component: VistaAgregarHorarioComponent},
  {path: 'armar-horario', component: VistaArmarHorarioComponent},
  {path: 'login', component: LoginFormComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }