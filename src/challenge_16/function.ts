/*
Lara Eloft ha encontrado unos restos élficos en una cueva, cerca del Círculo Polar Ártico, a 8 km al norte de Rovaniemi.

Ahora se encuentra descifrando unas misteriosas cartas que contiene información sobre unos números que le puede hacer llegar al próximo objetivo.

Lara tiene un documento que contiene una serie de números que pueden ser usados para descifrarlos:

Símbolo       Valor
  .             1
  ,             5
  :             10
  ;             50
  !             100
Lara, además, ha notado una cosa. Los símbolos se restan si están inmediatamente a la izquierda de otro mayor. 😱

Tenemos que crear una función que nos pasa una cadena de texto con símbolos y tenemos que transformarlo al número correcto. ¡Ojo! Si encuentras un símbolo que no entendemos, mejor que devolvamos un NaN:
*/

const decodedNumber = (symbols: string) => {
    if (symbols.length === 0) return NaN

    const symbolsData = [
        { symbol: ".", value: 1 },
        { symbol: ",", value: 5 },
        { symbol: ":", value: 10 },
        { symbol: ";", value: 50 },
        { symbol: "!", value: 100 }
    ]

    const split = symbols.split("");
    let valueRes: number = 0;
    let previousValue: number = 0;

    for (let i = 0; i < split.length; i++) {
        const value_0 = split[i];
        const value_1 = split[i + 1];

        const find_0 = symbolsData.find(({ symbol }) => symbol === value_0);

        if (!find_0) return NaN

        const find_1 = symbolsData.find(({ symbol }) => symbol === value_1);

        if (i === split.length - 1) {
            valueRes += find_0.value
            continue
        }

        else if (!find_1) return NaN

        valueRes += find_1.value > find_0.value ? (-(find_0.value)) : find_0.value

    }

    return valueRes;

}

export { decodedNumber }