/*
Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho un desastre y no encuentra nada.

Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.

La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto. Veamos unos ejemplos:
*/

const contains = (store: object, product: string): any => {
    const objectValues = Object.values(store);

    let dict: any = {};

    for (let value of objectValues) {
        if (typeof value === "object") {
            dict = {
                ...dict,
                ...value
            }
        }

        else if (typeof value === "string") {
            if (value.toLowerCase() === product.toLowerCase()) {
                return true
            }
        }
    }

    return Object.keys(dict).length === 0 ? false : contains(dict, product)
}

export { contains };