/*
En la clase de español del pueblo de Laponia han creado un reto a la hora de escribir la carta a Papa Noél 🎅: la carta ✉️ tiene que contener todas las letras del alfabeto.

Desde el taller de Santa 🎅 se han enterado y quieren escribir una función que les diga si realmente la cadena de texto que les llega tiene, efectivamente, todas las letras del abecedario español 🔎.

Hay que tener en cuenta las letras en mayúscula y que las letras con acento y diéresis se consideran iguales. Por ejemplo la á y la ä cuenta como una a.

Vamos a ver unos ejemplos de frases:

pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true

pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
pangram('De la a a la z, nos faltan letras') // false
*/

const pangram = (letter: string) => {
    const diactrics = {
        "a": ["á", "ä"],
        "e": ["é", "ë"],
        "i": ["í"],
        "o": ["ó", "ö"],
        "u": ["ú", "ü"],
    }

    const objectEntries = Object.entries(diactrics);

    const abc = "abcdefghijklmnñopqrstuvwxyz"

    const formatText = letter
        .toLowerCase()
        .split("")
        .map((value) => {
            const find = objectEntries.find((diact) => diact[1].includes(value));

            if (!find) return value

            return find[0]
        })
        .join("")
        .replace(/[^a-z\ñ]/g, "")

    for (let i = 0; i < abc.length; i++) {
        const includes = formatText.includes(abc[i]);

        if (!includes) return false
    }

    return true
}

export { pangram }