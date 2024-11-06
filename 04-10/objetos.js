//comocriar objetos

let pessoa = {
    //atributo/propriedade
    //nos nao usamos let nem const
    //nos usamos ':' ao inves de '='
    nome: "everton",
    idade: 15,
    cpf: 904557112308,
    filmesFavoritos: ["jovem sheldon","teen wolf"],
   
   //funcoes criadas dentro de objetos podem ser chamadas de metodos
    trabalhar: function() {
    console.log(`${pessoa.nome} Esta trabalhando. Ele nao ve a hora de chegar em casa e jogar.`)
    }
}

console.log(pessoa)

//para acessar um dos atributos, fazemos assim:
console.log(pessoa.nome)
console.log(pessoa.filmesFavoritos[0])
//para trocar o valor de um dos atributos, fazemos assim:
pessoa.idade = 81
console.log(pessoa.idade)
//adicionar:
pessoa.altura = 1.75
console.log(pessoa.altura)

console.log(pessoa)

pessoa.trabalhar() //aqui eu chamo/executo o metodo do meu objeto

let personagens = {
    nome:"arthur"
    Idade:30
    poderes:"Da ao seu portador habilidades sobre-humanas"
    afazeres:function() {
        console.log(`${personagens.nome}O poder de Excalibur era tão grande que conferia ao seu portador habilidades sobre-humanas`)

}

    skalibur