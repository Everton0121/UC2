let voltas = 0
//voltas += 1
//voltas = voltas + 1
voltas ++
console.log(voltas)

voltas += 3
console.log(voltas)

voltas --
console.log(voltas)



// No comeco, o ciclistra nao deu volta nenhuma
let voltas1 =0

//ENQUANTO o ciclista nao der 10 voltas, ele pedala de novo

while (voltas1 <= 10) {
    console.log(`continue pedalando! voce ja deu ${voltas1} voltas!`)
    voltas1 ++
}

console.log(`meus parabens, voce venceu!`)
