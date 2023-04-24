/*
Aritméticos  
+ Adição / Concatenação = unir dois valores.
/ * -
** pontenciação / elevado
% resto da divisão
//Precedência//
()--> ** --> * / % --> + -
*/
/*let contador = 1;
contador++;  ++ repete o valor e adcionado mais 1.
contador++;  Pode ser ++contador ou contador++
++contador; ++contador = pré-incremento ele incrementa e mostra o valor total
console.log(contador); contador++ = pós-incremento ele mostra o valor para depois incrementar.*/

const passo = 5;
let contador = 0;
// contador = contador + passo;
// console.log(contador);
// contador = contador + passo;
// console.log(contador);
contador+= passo; // contador = contador + passo Operador de atribuição.
console.log(contador);

contador = 2;
contador**=10;
console.log(contador);

//NaN Not a Number parseInt(inteiro), parseFloat(decimais), Number(todos)

const num = 10;
const num1 = parseFloat('5.5');
console.log(num + num1);
console.log(typeof num1);