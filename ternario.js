const idadeMinima = 18;
const idadeCliente = 16;

// if (idadeCliente >= idadeMinima) {
//     console.log('pode beber!')
// } else {
//     console.log('não pode beber!')
// }

            //condição                     //true          //false
console.log(idadeCliente >= idadeMinima ? 'pode beber!' : 'não pode beber!')

// uma dica de boa prática: não utilizar operadores ternarios dentro de outros operadores ternarios. fica difícil de ler e pode gerar dificuldades de manutenção do código. Nesse caso, é melhor utilizar o if.