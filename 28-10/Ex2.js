//raça de chachorro:"São Bernardo","Terra-Nova","Dogue Alemão","Mastim Tibetano","Cane Corso"

const readline = require(' readline-sync');

const racasDeDog = ["São Bernardo","Terra-Nova","Dogue Alemão","Mastim Tibetano","Cane Corso"]
 

let indice = readline.questionInt("Escolha uma raça: \n1 São Bernardo \n2 - Terra-Nova \n3 - Dogue Alemão \n4 - Mastim Tibetano \n5 - Cane Corso \n" )

console.log("Você escolheu:", racasDeDog[indice - 1])

