import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GrupoFormComponent } from './grupo-form/grupo-form.component';
import { GrupoCardComponent } from './grupo-card/grupo-card.component';
import { VistaPrincipalComponent } from './vista-principal/vista-principal.component';

@NgModule({
  declarations: [
    GrupoFormComponent,
    GrupoCardComponent,
    VistaPrincipalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    GrupoCardComponent,
    GrupoFormComponent,
    VistaPrincipalComponent
  ]
})
export class GruposModule { }
