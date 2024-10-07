import { Component } from '@angular/core';
import { Iprofesor } from '../interfaces/Iprofesor';

@Component({
  selector: 'app-container-profesores',
  templateUrl: './container-profesores.component.html',
  styleUrl: './container-profesores.component.css'
})
export class ContainerProfesoresComponent {
  profesores!:Iprofesor[]

  ngOnInit(){
    let profesString = localStorage.getItem("listaProfesores")
    if(profesString){
      this.profesores = JSON.parse(profesString) as Iprofesor[]
    }
    console.log(this.profesores)
  }  
}
