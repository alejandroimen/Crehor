import { Component, Input } from '@angular/core';
import { Iprofesor } from '../interfaces/Iprofesor';

@Component({
  selector: 'app-profesor-line',
  templateUrl: './profesor-line.component.html',
  styleUrl: './profesor-line.component.css'
})
export class ProfesorLineComponent {
  @Input() prof: Iprofesor={
    nombre: '',
    apellido: '',
    telefono: '',
    especialidad: '',
    titulo: ''
  }
  
  /* profesores!:Iprofesor[]

  ngOnInit(){
    let profesString = localStorage.getItem("listaProfesores")
    if(profesString){
      this.profesores = JSON.parse(profesString) as Iprofesor[]
    }
    console.log(this.profesores)
  } */
}
