import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MateriasModule } from './materias/materias.module';
import { ProfesoresModule } from "./profesores/profesores.module";
import { HorarioModule } from "./horario/horario.module";
import { HeaderComponent } from './standalone/header/header.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MateriasModule,
    HttpClientModule,
    ProfesoresModule,
    HorarioModule,
    HeaderComponent

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
