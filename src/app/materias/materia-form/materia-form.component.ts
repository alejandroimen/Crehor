import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-materia-form',
  templateUrl: './materia-form.component.html',
  styleUrl: './materia-form.component.css'
})
export class MateriaFormComponent {
  @Input() isOpen: boolean = false

}
