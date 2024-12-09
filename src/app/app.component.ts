import { Component } from '@angular/core';
import { Imateria } from './materias/interfaces/imateria';
import { Iprofesor } from './profesores/interfaces/Iprofesor';
import { GruposService } from './grupos/services/grupos.service';
import { MateriaService } from './materias/materia.service';
import { ProfesorService } from './profesores/services/profesor.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App-web';
  showHeader: boolean = false

  constructor(private router: Router){
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showHeader = !(
          event.url==='/login'
        )
      }
    })
  }
}
