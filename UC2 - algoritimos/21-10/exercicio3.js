const readline = require(`readline-sync`)
const number1 = Number(readline.questionInt("Escolha um numero para fazer a tabuada"))
let tabuada = 0
while (tabuada <= 10){
console.log(`${tabuada} x ${number1} = ${tabuada * number1}`)
tabuada++
}