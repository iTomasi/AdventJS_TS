import { contarOvejas } from "./function"

const exampleData = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo' },
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo' }
]

const response = contarOvejas(exampleData)

console.log(response)