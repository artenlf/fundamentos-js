//declaração de função

function minhaFuncao(param){
    //bloco de código
}

minhaFuncao('param')

// expressão de função

const soma = function(num1, num2) {return num1 + num2}
console.log(soma(2, 2))

//diferença entre declaração e expressão : hoisting
//funções e var são "listadas" no topo do código

console.log(apresentar())

function apresentar() {
    return 'olá';
}

// console.log(soma1(2, 2))
// const soma1 = function(num1, num2) {return num1 + num2} // esse código retorna um erro de acesso antes de inicialização