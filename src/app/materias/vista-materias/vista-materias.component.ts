import { Component } from '@angular/core';
import { Imateria } from '../interfaces/imateria';
import { MateriaService } from '../materia.service';
@Component({
  selector: 'app-vista-materias',
  standalone: false,
  templateUrl: './vista-materias.component.html',
  styleUrl: './vista-materias.component.css'
})
export class VistaMateriasComponent {
  teacherId: string = ''
  update: boolean= false
  visibleDelete: boolean = false
  visibleForm: boolean = false
  i: number = -1
  materias: Imateria[] = []

  constructor(private matServ: MateriaService) { 
    this.teacherId=localStorage.getItem('teacherId') || ''
    this.matServ.getAll().subscribe(
      response => {
        this.materias = response
        console.log('Exitito', response);
        
      },
      error => {
        console.log('Error al obtener las materias', error);
      }
    )
  }

  changeVisibility(): void {
    this.visibleForm = !this.visibleForm
  }

  ngDoCheck(): void {
    if (this.update) {
      this.matServ.getAll().subscribe(
        response => {
          this.materias = response
          console.log('Exitito', response);
          
        },
        error => {
          console.log('Error al obtener las materias', error);
        }
      )
    }
    this.update = false
  }
}