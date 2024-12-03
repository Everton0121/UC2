//Operador E (AND) - Simbolo: &&
// Retorna true apenas quando todos forem true
//Apenas um unico false ja é suficiente para retornar false
console.log(true && true)//true
console.log(true && false)//false
console.log(false && false)//false
console.log(false && true)//false
const idade = 20
const maiorIdade = idade >= 18 //Boolean
const carteira = true
const carro = true

console.log(maiorIdade && carteira && carro)//true
//Operador OU (OUR) - Simbolo: ||
// Retorna false apenas quando todos forem false
console.log(true || true)//true
console.log(true || false)//true
console.log(false || false)//true
console.log(false || true)//false

const temTrabalho = false
const economiza = false
const investir = false
const herdeiro = true

console.log((temTrabalho && economiza && investir)) || herdeiro

//Operador NÃO/Negação (NOT) - Simbolo: !
const ligado = true

console.log(!ligado)
