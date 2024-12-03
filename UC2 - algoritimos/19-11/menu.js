const readlineSync = require('readline-sync');

function exibirMenu(){
let opcao;
while(true){
opcao = readlineSync.questionInt("Escola uma opcao: \n1.Exibir Ola \n2. Exibir Hora Atual \n3. Sair\n")
switch(opcao){
    case 1:
        console.log("Olá")
        break
    case 2:
        console.log("Como vai")
        break
    case 3:
        console.log("Saindo....")
        return // Encerra a função, saindo do loop
        default:
            console.log("Opção Invalida!")
            break        
}

}
}
exibirMenu()