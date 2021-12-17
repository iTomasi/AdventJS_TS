/*
El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis ().

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. Por suerte sólo los ha dejado en medio de los paréntesis...
*/

const isValid = (letter: string) => {
    let firstParentesis: boolean = false;

    for (let i = 0; i < letter.length; i++) {
        const character = letter[i];

        if (
            (character === "(" && letter[i + 1] === ")") ||
            (firstParentesis && (character === "{" || character === "["))
        ) return false

        else if (character === "(") firstParentesis = true
        else if (character === ")") firstParentesis = false

    }

    return !firstParentesis
}

export { isValid };