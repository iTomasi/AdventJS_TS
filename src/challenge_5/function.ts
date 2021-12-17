/*
Con la emoción, ya estamos empezando a contar los días del calendario hasta el 25 de diciembre 📆.

Para ayudar a esto, vamos a crear una función que pasándole una instancia de Date nos diga el número de días que faltan.
*/

const daysToXmas = (date: Date | string) => {
    let theDate = date;

    if (typeof theDate === "object") theDate = theDate.toString();

    const christmasDateTimeStamp: number = new Date("Dec 25, 2021").getTime();
    const theDateTimeStamp: number = new Date(theDate).getTime();

    const substracting: number = christmasDateTimeStamp - theDateTimeStamp;

    const dateInSeconds = new Date(substracting).getTime() / 1000;
    const dateInMinutes = dateInSeconds / 60;
    const dateInHours = dateInMinutes / 60;
    const dateInDays = dateInHours / 24;

    return Math.ceil(dateInDays);
}

export { daysToXmas }