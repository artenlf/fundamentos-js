// var
//não é muito usada pois é muito propensa a bugs

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area);
// var area; //o programa lê todas as var antes de executar.

//let

// let forma = 'retangulo'
// let altura = 5;
// let comprimento = 7;
// let area;

// if (forma === 'retangulo') {
//     area = altura * comprimento;
// } else {
//     area = (altura * comprimento) /2;
// }

// console.log(area);

// const 
//imutável e deve ser declarado antes

const forma = 'quadrado';
const altura = 5;
const comprimento = 7;
let area;

if (forma === 'triangulo') {
    area = altura * comprimento;
} else {
    area = (altura * comprimento) /2;
}

// const area = altura * comprimento;
console.log(area);