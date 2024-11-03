import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GrupoFormComponent } from './grupo-form/grupo-form.component';
import { GrupoCardComponent } from './grupo-card/grupo-card.component';

@NgModule({
  declarations: [
    GrupoFormComponent,
    GrupoCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    GrupoCardComponent,
    GrupoFormComponent
  ]
})
export class GruposModule { }
