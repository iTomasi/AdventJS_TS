/*
Con la emoción, ya estamos empezando a contar los días del calendario hasta el 25 de diciembre 📆.

Para ayudar a esto, vamos a crear una función que pasándole una instancia de Date nos diga el número de días que faltan.
*/

import { daysToXmas } from "./function";

const exampleData = "Dec 24, 2021 00:00:01";

const response = daysToXmas(exampleData);

console.log(response);