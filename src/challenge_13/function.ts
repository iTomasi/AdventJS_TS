/*
¡Hay demasiados regalos 🎁! Y envolverlos es una locura...

Vamos a crear una función que pasándole un array de regalos, nos devuelva otro array pero donde todos los regalos han sido envueltos con asteriscos tanto por arriba como por los lados.

Sólo tienes que tener en cuenta unas cosillas ✌️:

Si el array está vacío, devuelve un array vacío
Los regalos son emojis 🎁... por lo que tenlo en cuenta a la hora de contar su longitud...
Por suerte, cada posición del array siempre tiene la misma longitud...
*/

const wrapGifts = (gifts: string[]) => {
    if (gifts[0] === undefined) return []

    const emojiRegExp = new RegExp(/^(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff]|[\u0023-\u0039]\ufe0f?\u20e3|\u3299|\u3297|\u303d|\u3030|\u24c2|\ud83c[\udd70-\udd71]|\ud83c[\udd7e-\udd7f]|\ud83c\udd8e|\ud83c[\udd91-\udd9a]|\ud83c[\udde6-\uddff]|[\ud83c[\ude01-\ude02]|\ud83c\ude1a|\ud83c\ude2f|[\ud83c[\ude32-\ude3a]|[\ud83c[\ude50-\ude51]|\u203c|\u2049|[\u25aa-\u25ab]|\u25b6|\u25c0|[\u25fb-\u25fe]|\u00a9|\u00ae|\u2122|\u2139|\ud83c\udc04|[\u2600-\u26FF]|\u2b05|\u2b06|\u2b07|\u2b1b|\u2b1c|\u2b50|\u2b55|\u231a|\u231b|\u2328|\u23cf|[\u23e9-\u23f3]|[\u23f8-\u23fa]|\ud83c\udccf|\u2934|\u2935|[\u2190-\u21ff])+$/)
    const checkingEmojis = gifts.some(value => {
        const unicode = value.codePointAt(0)?.toString(16);

        if (unicode?.includes("26bd")) {
            return unicode !== "26bd"
        }

        return !emojiRegExp.test(value)
    });

    if (checkingEmojis) return []

    const valueLength = (emoji: any) => {
        if (emoji.charCodeAt(0).toString(16).includes("26bd")) {
            return emoji.length / 2
        }

        return emoji.match(/./gu).length || 0
    }

    gifts.sort((a, b) => valueLength(b) - valueLength(a))

    const asteriskTopBottom: number = 4;
    const asteriskLeftRight: number = 1;
    const maxLength: number = valueLength(gifts[0]);

    const asteriskTopBottomStr: string = `${("*").repeat(asteriskTopBottom + ((maxLength * 2) - 2))}`

    const giftsResponse: string[] = [asteriskTopBottomStr]

    for (let value of gifts) {
        if (valueLength(value) !== maxLength) {
            value += (" ").repeat(maxLength - valueLength(value))
        }

        giftsResponse.push(`${("*").repeat(asteriskLeftRight)}${value}${("*").repeat(asteriskLeftRight)}`)
    }

    giftsResponse.push(asteriskTopBottomStr)

    return giftsResponse;
}

export { wrapGifts }