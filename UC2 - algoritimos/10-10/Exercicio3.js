const readline = require(`readline-sync`)
const number = readline.questionInt("Digite um numero ?")

switch(number){
    case 1:
        console.log("Você escolheu o jogo Hollow Knight!")
    break
    case 2:
        console.log("Você escolheu o jogo League of Legends!")
        break
    case 3:
        console.log("Você escolheu Elden Ring!")
        break
        default:
            console.log("O jogo não existe")
}
