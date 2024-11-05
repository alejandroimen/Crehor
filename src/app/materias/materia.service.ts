import { Injectable } from '@angular/core';
import { Imateria } from './interfaces/imateria';

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  constructor() { }
  getAll(): Imateria[] {
    const matsSaved = localStorage.getItem('listaMaterias');
    return matsSaved ? (JSON.parse(matsSaved) as Imateria[]) : []
  }

  add(profesor: Imateria): void{
    let matSaved = this.getAll()
    matSaved.push(profesor)
    localStorage.setItem('listaMaterias', JSON.stringify(matSaved))
  }

  edit(index: number, profesor: Imateria): void{
    let matSaved = this.getAll()
    matSaved[index] = profesor
    localStorage.setItem('listaMaterias', JSON.stringify(matSaved))
  }

  delete(index: number): void{
    let matSaved = this.getAll()
    matSaved.splice(index, 1)
    localStorage.setItem('listaMaterias', JSON.stringify(matSaved))
  }
}
