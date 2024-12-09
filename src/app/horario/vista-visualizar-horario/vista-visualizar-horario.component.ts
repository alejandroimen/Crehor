import { Component } from '@angular/core';
import { Horario } from '../interfaces/horario';
import { IHorarioShow } from '../interfaces/i-horario-show';
import { HorarioService } from '../services/horario.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-vista-visualizar-horario',
  templateUrl: './vista-visualizar-horario.component.html',
  styleUrl: './vista-visualizar-horario.component.css'
})
export class VistaVisualizarHorarioComponent {
  horarioGroup: IHorarioShow[] = []
  horario: IHorarioShow[][] = Array.from({ length: 10 }, () => Array(5).fill(null));
  dias: string[] = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes"
  ]

  constructor(private horServ: HorarioService,
              private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id: string = this.route.snapshot.paramMap.get('id') || ''
    this.horServ.getHorario(id).subscribe(
      response => {
        this.horarioGroup = response
        alert('Exito')
        console.log('Exito al oobtener', this.horarioGroup);
      },
      error => {
        alert('Algo salio mal')
        console.log('Error', error);
      }
    )
  }

  ngDoCheck(): void {
    this.horarioGroup.forEach(sch => {
      console.log('hora', sch.hour, ' dia', sch.day);
      
      this.horario[sch.hour-1][sch.day-1] = sch
    })
    console.log('Horario ola', this.horario);
  }
}
