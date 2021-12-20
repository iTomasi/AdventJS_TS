/*
¡Hemos perdido a un reno y falta poco más de una semana para Navidad! 😱

Lo peor es que son tantos que no sabemos cuál es el que nos falta... ¡Qué lío! A ver, Elfon Musk ha hecho inventario y nos pasa un array con los ids de cada reno.

👍 Lo bueno: los ids son números que pueden ir del 0 al 100, no están repetidos y sólo se ha perdido un reno.

👎 Lo malo: la lista está desordenada y podría faltar el último...

Necesitamos una función que al pasarle la lista de ids de renos nos diga inmediatamente cuál es el que falta:
*/

const missingReindeer = (ids: number[]) => {
    if (ids.length === 1) return ids[0] === 0 ? ++ids[0] : --ids[0]
    else if (ids.length === 2) return ids[0] === 0 ? 2 : 0

    ids.sort((a: number, b: number) => a - b)

    for (let i in ids) {
        const value_0 = ids[i]
        const value_1 = ids[parseInt(i) + 1]

        if (
            value_1 !== undefined &&
            value_1 - value_0 !== 1
        ) return value_1 - 1
    }

    return "what?"

}

export { missingReindeer }