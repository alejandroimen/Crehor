import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grupo-form',
  templateUrl: './grupo-form.component.html',
  styleUrl: './grupo-form.component.css'
})
export class GrupoFormComponent {
  @Input() visible: boolean = false
  @Output() visibleChange = new EventEmitter<boolean>()

  changeVisibility(): void {
    this.visibleChange.emit(!this.visible)
  }
}
