/*
Para mejorar la productividad de la tienda en la que trabajamos, vamos a crear una pequeña máquina que calcula el mínimo número de monedas que debemos usar para dar el cambio de una compra en metálico.

Las monedas para cambio que puedes usar son estas:

coins[0] = 1 céntimo
coins[1] = 2 céntimos
coins[2] = 5 céntimos
coins[3] = 10 céntimos
coins[4] = 20 céntimos
coins[5] = 50 céntimos
*/

const getCoins = (change: number) => {
    const coinsData: number[] = [1, 2, 5, 10, 20, 50];
    const userChange = coinsData.map((value) => ({ value, quantity: 0 }));

    while (change > 0) {
        for (let i = userChange.length; i > 0; i--) {
            const value = userChange[i - 1];

            if (change >= value.value) {
                value.quantity += 1;
                change -= value.value
                break
            }
        }
    }

    return userChange.map(value => value.quantity)
}

export { getCoins };