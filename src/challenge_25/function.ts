/*
Ayer, en noche buena, una fam铆lia cen贸 por todo lo alto... Con tanta copa 馃嵕 encima todav铆a no han retirado los platos y la comida de ayer...

Un ratoncillo llamado midurat 馃惌, que vi贸 ayer el fest铆n escondido, est谩 relami茅ndose los bigotes al ver todos los manjares que hay en el comedor.

Eso s铆, hay que tener cuidado 馃樁 y s贸lo hacer los movimientos correctos para comer algo. Por eso, el rat贸n, que se ha visto los v铆deos de midudev, va a crear una funci贸n para saber si su pr贸ximo movimiento es correcto o no 鉁?.

El ratoncillo se puede mover en 4 direcciones: up, down, left, right y el comedor es una matriz (un array de arrays) donde cada posici贸n puede ser:

Un espacio vac铆o es que no hay nada
Una m es el rat贸n
Un * es la comida
Vamos a ver unos ejemplos:

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

canMouseEat('up',    room)   // false
canMouseEat('down',  room)   // true
canMouseEat('right', room)   // false
canMouseEat('left',  room)   // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]

canMouseEat('up',    room2)   // false
canMouseEat('down',  room2)   // false
canMouseEat('right', room2)   // true
canMouseEat('left',  room2)   // false
隆Ten en cuenta que el rat贸n quiere buscar comida en diferentes habitaciones y que cada una puede tener dimensiones diferentes!
*/

const canMouseEat = (direction: "up" | "right" | "down" | "left", game: any[]) => {
    const findIndexMouse = game.findIndex((value) => value.includes("m"));

    if (findIndexMouse === -1) return false

    const findPosMouse = game[findIndexMouse].findIndex((value: any) => value === "m");

    if ((direction === "up" && findIndexMouse > 0) || (direction === "down" && findIndexMouse < game.length - 1)) {

        const theArray = game[direction === "up" ? findIndexMouse - 1 : findIndexMouse + 1];

        let haveFood: boolean = false;

        for (let i = 0; i < theArray.length; i++) {
            const value = theArray[i];

            if (value !== "*") continue

            else if (i === findPosMouse) {
                haveFood = true;
                break
            }
        }

        return haveFood
    }

    else if ((direction === "right" && findPosMouse < game[findIndexMouse].length - 1) || (direction === "left" && findPosMouse > 0)) {
        const theArray = game[findIndexMouse];

        let haveFood: boolean = false;

        for (let i = 0; i < theArray.length; i++) {
            const value = theArray[i];

            if (value !== "*") continue

            else if ((direction === "left" && findPosMouse - 1 === i) || (direction === "right" && findPosMouse + 1 === i)) {
                haveFood = true;
                break
            }
        }

        return haveFood;
    }

    return false
}

export { canMouseEat }