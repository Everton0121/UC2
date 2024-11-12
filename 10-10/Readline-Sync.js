const readline = require(`readline-sync`)
const nome = readline.question("Qual seu nome ?")
const sobreNome = readline.question("Qual seu sobrenome ?")
console.log(`Olá, ${nome} ${sobreNome}.Tudo bem com você?`)