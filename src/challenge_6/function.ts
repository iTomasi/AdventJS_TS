/*
Antes de poder disfrutar de la navidad... nos toca terminar de rematar los exámenes finales. ¡Y toca un poco de matemáticas! 😱

A una función se le pasan dos parámetros: un Array con números y el resultado que se espera.

La función debe devolver los dos valores del Array que sumen el resultado esperado. Como a veces pueden haber más de dos valores que sumen, se devolverá el primero empezando por la izquierda que encuentre otro par, sin importar lo lejos que esté a la derecha.

Si no se encuentra, se devuelve null.
*/

const sumPairs = (numbers: number[], result: number) => {
    const res: number[] = [];

    for (let i in numbers) {
        const value = numbers[i];

        const find = numbers.find((number, index) => value + number === result && index !== parseInt(i));

        if (!find) continue

        res.push(value, find)
        break
    }

    return res.length === 0 ? null : res
}

export { sumPairs };