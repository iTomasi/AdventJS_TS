/*
Antes de poder disfrutar de la navidad... nos toca terminar de rematar los exámenes finales. ¡Y toca un poco de matemáticas! 😱

A una función se le pasan dos parámetros: un Array con números y el resultado que se espera.

La función debe devolver los dos valores del Array que sumen el resultado esperado. Como a veces pueden haber más de dos valores que sumen, se devolverá el primero empezando por la izquierda que encuentre otro par, sin importar lo lejos que esté a la derecha.

Si no se encuentra, se devuelve null.
*/

import { sumPairs } from "./function";

const exampleData: any = [[0, 2, 2, 3, -1, 1, 5], 6];

const response = sumPairs(exampleData[0], exampleData[1]);

console.log(response);