import { Component } from '@angular/core';
import { Iprofesor } from '../../profesores/interfaces/Iprofesor';
import { ProfesorService } from '../../profesores/services/profesor.service';
@Component({
  selector: 'app-vista-profesores',
  templateUrl: './vista-profesores.component.html',
  styleUrl: './vista-profesores.component.css'
})
export class VistaProfesoresComponent {
  visibleDelete:boolean = false
  visibleForm: boolean = false
  i: number = -1
  profesores: Iprofesor[] = []

  constructor(private profServ: ProfesorService){
    this.profesores = profServ.getAll()
  }

  changeVisibilityForm(): void {
    this.visibleForm = !this.visibleForm
  }
}
