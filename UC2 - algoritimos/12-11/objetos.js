const donoDoPet = {
    nome: "edu", 
    idade: 18,
    pet: {
        nome:'thomas',
        raca: "Dachshund",
        idade: 0.5
    }
}

console.log(donoDoPet.pet.nome)



const curso ={
    nome: ' front',
    linguagens: ["Javascript", "Css", "HTML"]
}
console.log(curso.linguagens[1])




const professores = [{nome: "Leonardo", uc:"2"}, {nome: "Lucas", Uc:"3"}, {nome:"Maria Cláudia", uc :"5"}
]

console.log(professores[0].uc)









const novoProfessor = {
    ...professores,
    nome: "Lucas",
    idade: 30,
    veiculo: "Carro"
}

console.log(professores)
console.log(novoProfessor)