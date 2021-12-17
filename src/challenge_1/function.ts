/*
Challenge - 1

Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.
*/

interface IContarOvejas {
    name: string;
    color: string;
}

const contarOvejas = (ovejas: IContarOvejas[]) => {
    const filter = ovejas.filter((value) => {
        return value.color === "rojo" && value.name.toLowerCase().includes("n") && value.name.toLowerCase().includes("a")
    });

    return filter
}

export { contarOvejas };