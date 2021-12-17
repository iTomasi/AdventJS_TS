/*
¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, como máximo, 100.

Si le pasamos el argumento 5, se pintaría esto:

____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const createXmasTree = (height: number) => {
    let res: string = "";
    const underScore: string = "_";
    const asterisk: string = "*";

    let asteriskQuantity: number = 1;

    const trunk = `${underScore.repeat(height - 1)}#${underScore.repeat(height - 1)}\n`;

    while (height !== 0) {
        res += `${underScore.repeat(height - 1)}${asterisk.repeat(asteriskQuantity)}${underScore.repeat(height - 1)}\n`;

        height -= 1
        asteriskQuantity += 2;
    }

    return (res + trunk.repeat(2)).trim();
}

export { createXmasTree };