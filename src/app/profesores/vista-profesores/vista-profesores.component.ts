import { Component } from '@angular/core';
import { Iprofesor } from '../interfaces/Iprofesor';
import { ProfesorService } from '../services/profesor.service';
import { EspecialidadService } from '../services/especialidad.service';
import { Iespecialidad } from '../interfaces/iespecialidad';
@Component({
  selector: 'app-vista-profesores',
  standalone: false,
  templateUrl: './vista-profesores.component.html',
  styleUrl: './vista-profesores.component.css'
})
export class VistaProfesoresComponent {
  visibleDelete:boolean = false
  visibleForm: boolean = false
  i: number = -1
  profesores: Iprofesor[] = []
  especialidades: Iespecialidad[] = []

  constructor(private profServ: ProfesorService, private speciServ: EspecialidadService){
    profServ.getAll().subscribe(
      response => {
        this.profesores = response
        console.log(this.profesores);
      },
      error => {
        console.log('Errorsito en: ', error);
      }
    ),
    speciServ.getAll().subscribe(
      response => {
        this.especialidades = response
        console.log(this.profesores);
      },
      error => {
        console.log('Errorsito en: ', error);
      }
    )
  }

  changeVisibilityForm(): void {
    this.visibleForm = !this.visibleForm
  }
}
