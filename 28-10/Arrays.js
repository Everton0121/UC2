const listaDeCompras = []; // Este é um array vazio
const listaDeNomes = ["Leo","Vitoria","Nala","Margot","Simba"]
const listaDeNumeros = [10,15,30,99,7]
const listaDeBooleanas = [true,false,true]

console.log(listaDeCompras)
//Adiciona um item no final  do array
listaDeCompras.push("Pão")
listaDeCompras.push("Nata")
listaDeCompras.push("Iogurte")
console.log(listaDeCompras)
//Remove o ultimo item de um array
listaDeCompras.pop()
console.log(listaDeCompras)
//Exibe o item de acordo com a sua posição
console.log(listaDeNomes[0])//Leo
console.log(listaDeNumeros[3])//99
console.log(listaDeBooleanas[3])// undefined

//Troca o valor de um numero no array de acordo com sua posição/indice
console.log("Array antes da troca:", listaDeNumeros)
listaDeNumeros[3] = 100
console.log("Array depois da troca:", listaDeNumeros)

//Propriedade length
//Mostra o tamanho do array



//metodo includes
//verifica se um array tem ou nao um determinado elemento (retorna true ou false)

const seriesBoas = ["game of thrones", "breaking bad", "shogun"]
console.log(seriesBoas.includes("game of thrones")) //true
console.log(seriesBoas.includes("la casa de papel")) //false

//metodo splice
//remove n elementos a partir da posicao i do array
const letras =["A","B","C","D","E","F","G","H"]

letras.slice(2,2, "Z") //oprimeiro diz a partir de qual indice começa a remover. o segundo parametro diz quanto ele remove.
console.log(letras)

