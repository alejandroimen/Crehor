import { Injectable } from '@angular/core';
import { Iprofesor } from '../interfaces/Iprofesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {

  constructor() { }

  getAll(): Iprofesor[] {
    const gruposGuardados = localStorage.getItem('listaProfesores');
    return gruposGuardados ? (JSON.parse(gruposGuardados) as Iprofesor[]) : []
  }

  add(profesor: Iprofesor): void{
    const fecha = new Date().toISOString().slice(2, 10).replace(/-/g, '');
    const hash = btoa(profesor.nombre + profesor.apellido).slice(0, 4).toUpperCase();
    profesor.codigo = `${fecha}-${hash}`
    let profesoresGuardados = this.getAll()
    profesoresGuardados.push(profesor)
    localStorage.setItem('listaProfesores', JSON.stringify(profesoresGuardados))
  }

  edit(index: number, profesor: Iprofesor): void{
    let profesoresGuardados = this.getAll()
    profesor.codigo = profesoresGuardados[index].codigo
    profesoresGuardados[index] = profesor
    localStorage.setItem('listaProfesores', JSON.stringify(profesoresGuardados))
  }

  delete(index: number): void{
    let profesoresGuardados = this.getAll()
    console.log(index,'A eliminar',profesoresGuardados[index]);
    
    profesoresGuardados.splice(index, 1)
    localStorage.setItem('listaProfesores', JSON.stringify(profesoresGuardados))
  }
}
