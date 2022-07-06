// funções

// let x = '';
// console.log(x)
// x = 'oi';

//Declaração de funções:
//funções tem 2 momentos

// 1. declara a função
                    //string
function imprimeTexto(texto) {
    console.log(texto)
}

// 2. executa a função (1 ou + vezes)

imprimeTexto('oi');
imprimeTexto('outro texto');
imprimeTexto(soma());

// três formas de escrever funções

function soma() {
    return 2 + 2; // a linha de return tem que ser a última, após a sua execução ela não é executada novamente
}

// console.log(soma())