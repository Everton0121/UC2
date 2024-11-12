function calculaFahrenheit(temperaturaCelsius){
    const temperaturaFahnhereit = (temperaturaCelsius * 1.8) + 32
    return {temperaturaFahnhereit,temperaturaCelsius}
}
const {temperaturaFahnhereit,temperaturaCelsius} = calculaFahrenheit(30)

console.log(temperaturaFahnhereit)
console.log(temperaturaCelsius)