import { Injectable } from '@angular/core';
import { Igrupo } from '../interfaces/igrupo';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  constructor() { }

  getAll(): Igrupo[] {
    const gruposGuardados = localStorage.getItem('listaGrupos');
    return gruposGuardados ? (JSON.parse(gruposGuardados) as Igrupo[]) : []
  }

  addGrupo(grupo: Igrupo){
    let gruposGuardados = this.getAll()
    gruposGuardados.push(grupo)
    localStorage.setItem('listaGrupos', JSON.stringify(gruposGuardados))
  }
}
