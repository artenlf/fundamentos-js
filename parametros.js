// parâmetros de função

            //  2   2
function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(2, 2))
console.log(soma(10, 10))
console.log(soma(50, 25))
console.log(soma(36, 24))

// parâmetros vs. argumentos

// ordem dos parâmetros

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade(40,'Júnior')) // passando parâmetros de forma errada para exemplificar


function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}`;
}

console.log(nomeIdade('Beatriz', 34)) // exemplo correto



function multiplica (num1, num2) {
    return num1 * num2;
}
                        //    15     *    4
console.log(multiplica(soma(10, 5), soma(2, 2))) // soma 10+5 2+2 e multiplica os resultados 15*4 = 60


//Função sem retorno e sem parâmetro

function cumprimentar(){
    console.log('oi gente!')
   }
   
   cumprimentar()