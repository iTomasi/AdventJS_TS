/*
Invertir en criptomonedas es casi un deporte de riesgo. El otro día hackearon Bitmart y ha hecho que el valor de Bitcoin, y otras monedas, bajase un 25%.

Vamos a escribir una función que reciba la lista de precios de una criptomoneda en un día y debemos devolver la ganancia máxima que podríamos sacar si compramos y vendemos la inversión el mismo día.

La lista de precios es un array de números y representa el tiempo de izquierda a derecha. Por lo que ten en cuenta que no puedes comprar a un precio que esté a la derecha de la venta y no puedes vender a un precio que esté a la izquierda de la compra.
*/

const maxProfit = (prices: number[]) => {
    let buy: number = 0;
    let sale: number = 0;

    for (let i = 0; i < prices.length; i++) {
        const value = prices[i];

        if (i === 0) {
            buy = value;
            continue
        }

        if (buy > value && i !== prices.length - 1) {
            buy = value;
            sale = 0;
        }

        else if (value > sale) sale = value
    }

    const substracting: number = sale - buy;

    return substracting > 0 ? substracting : -1
}

export { maxProfit };