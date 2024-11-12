/*const readline = require(`readline-sync`)
const time = readline.question("Qual teu time?")

if( time.toLowerCase() === "inter"){
    console.log("Você torce para um bom time")
}else if(time.toLowerCase() === "gremio"){
    console.log("Você é calvo")
}else if(time.toLowerCase() === "juventude"){
    console.log("Que time é esse meu deus")
}else if(time.toLowerCase() === "corinthians"){
    console.log("Você torce para um time que nem do sul ele é")
}else{
    console.log("Você não gosta de futebol")*/

    const readline = require(`readline-sync`)
    const time = readline.question("Qual teu time?")

    switch(time.toLocaleLowerCase){
        case"inter":
        console.log("O seu time é o Inter")
        break
    case"gremio":
    console.log("O seu time é o Gremio")
    break
    
    default:
        console.log("Esse time não existe")
    
    }