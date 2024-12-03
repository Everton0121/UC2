//1) atividade

const readline = require ('readline-sync');

const nome = readlinequestion('qual seu nome?' )
const email = readlinequestion('qual seu e-mail?')

console.log(`o e-amil ${email}foi cadastrado com sucesso. seja bem-vindo(o), ${nome}`)


// 2 atividade

let comidasPreferidas = ["Pizza", "cachorro-quente", "Xis",
"hambuguer", "Churrasco",
"Ovo" ]
console.log ("Essas são minhas comidas preferidas:")
for (let i = 0; 1 < comidasPreferidas.length; i ++) {
console.log (comidasPreferidas [1])

}





// 3) atividade

// a) 

let listaDeTarefas = []

// b) 

const readline = require( 'readline-sync')
const tarefal = readline.question("Digite a Tarefa 1: ")
const tarefa2 = readline.question("Digite a Tarefa 2: ")
const tarefa3 = readline.question("Digite a Tarefa 3: ")

listaDeTarefas.push(tarefal,tarefa2,tarefa3)

//c)

console.log(listaDeTarefas)

//d) 

const numeroTarefa = readline.question("qual a tarefa que voce ja realizou? ")

//e)

const indice = numeroTarefa - 1
listaDeTarefas.splice(indece,1)

//f)

console.log (listaDeTarefas)









