let num1 = 0.7;
let num2 = 0.1;
// console.log(num1.toString() + num2); alteração momentânea
// num1 = num1.toString(); alteração permanente.
// console.log(num1.toString(2)); representação binária.
// num1 = num1.toFixed(2); // 2 casa decimais
// console.log(num1.toFixed(4));
console.log(Number.isInteger(num1)); // Para saber se o número é inteiro;
num1 = num1.toFixed(2); //para resolver a imprecisão de modo mais fácil.
num1 = ((num1 * 100) + (num2 * 100)) / 100; // para resolver a imprecisão de modo mais dificil.
