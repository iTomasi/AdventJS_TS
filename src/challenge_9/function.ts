/*
En la fábrica de Papa Noél 🎅 se acerca el día especial... y todavía tenemos un montón de cosas por contar. 😅

Por suerte a Mark Zucktheelf 🧝 se le ha ocurrido crear una función que permita agrupar un array, que puede ser de valores u objetos, a través de una función o de una propiedad.
*/

const groupBy = (collection: any[], it: any) => {
    const dict: any = {};

    try {
        for (let value of collection) {
            if (typeof it === "function") {
                const res = it(value).toString();

                if (!dict[res]) {
                    dict[res] = [value]
                    continue
                }

                dict[res.toString()] = [...dict[res], value]
            }

            else if (typeof it === "string") {
                if (it === "length") {
                    const res = value.toString().length.toString();

                    if (!dict[res]) {
                        dict[res] = [value]
                        continue
                    }

                    dict[res] = [...dict[res], value]
                    continue
                }

                const res = value[it].toString();

                if (!dict[res]) {
                    dict[res] = [value]
                    continue
                }

                dict[res] = [...dict[res], value]
            }
        }

        return dict
    }

    catch (e) {
        console.log(e);
        console.log("groupBy() Error");
        return {};
    }
}

export { groupBy };