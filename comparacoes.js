// '==' (comparacao implícita) e '===' (comparacao explicita)
// '==' compara o valor
// '===' compara o valor e o tipo de dado

const numero = 5;
const texto = '5';

console.log(numero == texto) // saída será true pois é feita conversão implícita

console.log(numero === texto) // saída será false pois é preciso que seja feita conversão explícita

// typeof

console.log(typeof numero) // saída com tipo de dado number
console.log(typeof texto) // saída com tipo de dado string

// as boas práticas pedem para que se use apenas o '===' e que se faça as conversões de modo explícito.