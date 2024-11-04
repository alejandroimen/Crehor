import { Imateria } from "./imateria";
import { Igrupo } from "../../grupos/interfaces/igrupo";
import { Iprofesor } from "../../profesores/interfaces/Iprofesor";

export interface Icurso {
    materia: Imateria
    grupo: Igrupo
    profr: Iprofesor
}
