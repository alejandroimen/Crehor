import { VistaPrincipalComponent } from './vistas/vista-principal/vista-principal.component';
import { VistaProfesoresComponent } from './vistas/vista-profesores/vista-profesores.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  {path: '', component: VistaPrincipalComponent},
  {path: 'profs', component: VistaProfesoresComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }