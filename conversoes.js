// tipo de dado
// booleanos

// conversão implícita
const numero = 456;
const numeroString = '456';

console.log(numero == numeroString); // a comparação com '==' verifica o que está dentro da string, por isso será true
console.log(numero === numeroString); // a comparação com '===' verifica os tipos e ao comparar um numero com uma string, o resultado retornado será false

 console.log(numero + numeroString); // aqui o operador '+' realiza uma concatenação das variáveis

// conversão explícita

console.log(numero + Number(numeroString)); // aqui a palavra reservada Number converte a string '456' para o numero 456, somando-o com a outra variável tipo numero, resultando em 912

// a palavra reservada Number também pode ser utilizada na atribuição de uma variável, garantindo que ela sempre será convertida para o tipo desejado

// uma observação é que se a string contiver algum caractere diferente de números, o retorno será NaN, mesmo tentando aplicar a conversão