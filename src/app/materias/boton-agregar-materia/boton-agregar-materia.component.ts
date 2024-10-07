import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boton-agregar-materia',
  templateUrl: './boton-agregar-materia.component.html',
  styleUrl: './boton-agregar-materia.component.css'
}) 
export class BotonAgregarMateriaComponent {
  @Input() isOpenFormMateria: boolean = false 

  showFormMateria(): void {
    this.isOpenFormMateria = !this.isOpenFormMateria
  }
} 
